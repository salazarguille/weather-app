/* eslint-disable import/prefer-default-export */
import { getWeatherImagePath } from '../data';

export const flatten = arr => arr.reduce(
    (flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    [],
);

export const groupByDay = ({ dt }) => Math.floor(dt / (1000 * 60 * 60 * 24));

export const mapWeatherItemTimestamp = item => ({
    ...item,
    dt: item.dt * 1000,
    weather: item.weather[0],
});

export const mapWeatherImagePath = weatherHour => ({
    ...weatherHour,
    weather: {
        ...weatherHour.weather,
        iconPath: getWeatherImagePath(weatherHour.weather.icon),
    },
});

export const getMinMaxTemps = (list) => {
    const mapped = list.map(item => [item.main.temp_min, item.main.temp_max]);
    const temps = flatten(mapped);
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);
    return {
        minTemp,
        maxTemp,
    };
};
