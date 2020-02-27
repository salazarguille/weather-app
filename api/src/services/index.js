import WeatherService from './weather.service';

const buildServices = (opts) => {
    return {
        weatherService: new WeatherService(opts),
    };
};


export default buildServices;
