import AppError from '../utils/error/AppError';

class WeatherController {
    constructor({
        config,
        services,
    }) {
        this.services = services;
        this.config = config;
        if (!this.services || !this.services.weatherService) {
            throw new AppError('System Error: cannot start WeatherController without app services / weather service.');
        }
        if (!this.config) {
            throw new AppError('System Error: cannot start WeatherController without app config.');
        }
    }

    async getWeatherFor(countryCode, zipCode) {
        const { services: { weatherService } } = this;
        const result = await weatherService.getWeatherFor(countryCode, zipCode);
        return result;
    }
}

export default WeatherController;
