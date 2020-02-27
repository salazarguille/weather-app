/* eslint-disable import/prefer-default-export */
import _ from 'lodash';
import zipCodeToGeoCoords from './zip-codes-to-geo-coords.json';
import weatherCodeToImage from './weather-codes-icon-map.json';
import BadRequestError from '../utils/error/BadRequestError';

export const getGeoCoords = (zipCode) => {
    const fixedZipCode = zipCode.toString().padStart(5, '0');
    const geoCoords = zipCodeToGeoCoords[fixedZipCode];
    if (_.isUndefined(geoCoords)) {
        throw new BadRequestError('Invalid zip code.');
    }
    return {
        lat: geoCoords[0],
        lon: geoCoords[1],
    };
};

export const getWeatherImagePath = (weatherCode) => {
    const weatherImagePath = weatherCodeToImage[weatherCode.toLowerCase()];
    if (_.isUndefined(weatherImagePath)) {
        throw new BadRequestError('Invalid weather code.');
    }
    return weatherImagePath;
};
