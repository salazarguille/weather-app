import { withData } from 'leche';
import WeatherController from '../../src/controllers/weather.controller';
import { SERVICES } from '../mocks/services';
import { CONFIG, WEATHER_FOR_RESPONSE } from '../mocks/apis';
import BadRequestError from '../../src/utils/error/BadRequestError';

jest.mock('../../src/services/weather.service');

describe('WeatherController', () => {
    describe('# constructor()', () => {
        withData({
            _1_valid: [SERVICES, CONFIG, false, undefined],
            _2_servicesUndefined: [undefined, CONFIG, true, 'System Error: cannot start WeatherController without app services / weather service.'],
            _2_configUndefined: [SERVICES, undefined, true, 'System Error: cannot start WeatherController without app config.'],
        }, (services, config, mustFail, expectedMessage) => {
            it(`should ${mustFail ? 'fail' : 'be valid'}.`, () => {
                // Setup
                const opts = {
                    services,
                    config,
                };

                try {
                    // Invocation
                    const result = new WeatherController(opts);

                    // Assertions
                    expect(!mustFail).toBeTruthy();
                    expect(result).toBeDefined();
                } catch (error) {
                    // Assertions
                    expect(mustFail).toBeTruthy();
                    expect(error).toBeDefined();
                    expect(error.message).toEqual(expectedMessage);
                }
            });
        });
    });

    describe('# getWeatherFor(countryCode, zipCode)', () => {
        withData({
            _1_valid: ['us', '90404'],
        }, (countryCode, zipCode) => {
            it('should be valid', async () => {
                // Setup
                SERVICES.weatherService.getWeatherFor.mockImplementationOnce(
                    () => Promise.resolve(WEATHER_FOR_RESPONSE),
                );
                const opts = {
                    services: SERVICES,
                    config: CONFIG,
                };
                const controller = new WeatherController(opts);

                // Invocation
                const result = await controller.getWeatherFor(countryCode, zipCode);

                // Assertions
                expect(result).toBeDefined();
            });
        });

        withData({
            _1_invalid: ['os', '90109', 'country not found'],
        }, (countryCode, zipCode, messageExpected) => {
            it('should have failed because input is invalid.', async () => {
                // Setup
                SERVICES.weatherService.getWeatherFor.mockImplementationOnce(
                    () => Promise.reject(new BadRequestError(messageExpected)),
                );
                const opts = {
                    services: SERVICES,
                    config: CONFIG,
                };
                const controller = new WeatherController(opts);

                try {
                    // Invocation
                    await controller.getWeatherFor(countryCode, zipCode);

                    // Assertions
                    expect(false).toBeTruthy();
                } catch (error) {
                    // Assertions
                    expect(error).toBeDefined();
                    expect(error.message).toEqual(messageExpected);
                }
            });
        });
    });
});
