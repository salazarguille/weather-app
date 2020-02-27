/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import axios from 'axios';
import { isValidLatitudAndLongitud } from '../utils/validator';
import BadRequestError from '../utils/error/BadRequestError';
import AppError from '../utils/error/AppError';
import { getGeoCoords } from '../data/index';
import {
    groupByDay,
    mapWeatherItemTimestamp,
    mapWeatherImagePath,
    getMinMaxTemps,
} from '../utils/array';

class WeatherService {
    constructor({
        config, logger,
    }) {
        this.config = config;
        this.logger = logger;
        if (!this.config) {
            throw new AppError('System Error: cannot start WeatherService without app config.');
        }
        if (!this.logger) {
            throw new AppError('System Error: cannot start WeatherService without app logger.');
        }
    }

    async getWeatherFor(countryCode, zipCode) {
        const { config: { WEATHER_API_URL, OPEN_WEATHER_MAP_KEY } } = this;

        const geoCoords = getGeoCoords(zipCode);

        const url = `${WEATHER_API_URL}/forecast?zip=${zipCode},${countryCode}&appid=${OPEN_WEATHER_MAP_KEY}&cnt=40`;
        try {
            const getWeatherForPromise = axios.get(url);
            const getUviForPromise = this.getUviFor(geoCoords.lat, geoCoords.lon);

            const [
                getWeatherForResult,
                getUviForResult,
            ] = await Promise.all([getWeatherForPromise, getUviForPromise]);

            const mapGroupDay = (group) => {
                const { minTemp, maxTemp } = getMinMaxTemps(group);
                return {
                    date: group[0].dt,
                    minTemp,
                    maxTemp,
                    hours: group.map(mapWeatherImagePath),
                };
            };
            const days = _.chain(getWeatherForResult.data.list)
                .map(mapWeatherItemTimestamp)
                .groupBy(groupByDay)
                .map(mapGroupDay);

            return {
                success: true,
                data: {
                    city: {
                        ...getWeatherForResult.data.city,
                        sunset: getWeatherForResult.data.city.sunset * 1000,
                        sunrise: getWeatherForResult.data.city.sunrise * 1000,
                    },
                    weather: days,
                    uvi: getUviForResult.data,
                },
            };
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new BadRequestError(error.response.data.message);
            }
            throw error;
        }
    }

    async getUviFor(latitude, longitude) {
        if (!isValidLatitudAndLongitud(latitude, longitude)) {
            throw new BadRequestError('Latitude or / and longitude are invalid.');
        }

        try {
            const { config: { WEATHER_API_URL, OPEN_WEATHER_MAP_KEY } } = this;
            const url = `${WEATHER_API_URL}/uvi?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_KEY}`;
            const response = await axios.get(url);
            response.data.date *= 1000;
            return {
                success: true,
                data: response.data,
            };
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new BadRequestError(error.response.data.message);
            }
            throw error;
        }
    }
}

export default WeatherService;
