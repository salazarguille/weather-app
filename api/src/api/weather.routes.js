import { Router } from 'express';
import WeatherController from '../controllers/weather.controller';
import { respondHttp } from '../utils/http';

export default (opts) => {
    const weatherRouter = Router();
    const weatherController = new WeatherController(opts);

    weatherRouter.get(
        '/:countryCode/:zipCode',
        respondHttp(
            weatherController.getWeatherFor.bind(weatherController),
            req => [
                req.params.countryCode,
                req.params.zipCode,
            ],
        ),
    );

    return weatherRouter;
};
