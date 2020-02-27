/* eslint-disable import/prefer-default-export */
import WeatherService from '../../src/services/weather.service';
import Logger from '../../src/utils/logger';
import { CONFIG } from './apis';

export const LOGGER = new Logger();

export const SERVICE_CONFIG = {
    config: CONFIG,
    logger: LOGGER,
};

export const SERVICES = {
    weatherService: new WeatherService(SERVICE_CONFIG),
};

export const CONTROLLER_CONFIG = {
    config: CONFIG,
    services: SERVICES,
};
