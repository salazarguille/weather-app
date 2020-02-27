import { withData } from 'leche';
import axios from 'axios';
import WeatherService from '../../src/services/weather.service';
import BadRequestError from '../../src/utils/error/BadRequestError';
import {
    FORECAST_RESPONSE,
    UVI_RESPONSE,
    CONFIG,
} from '../mocks/apis';
import { SERVICE_CONFIG, LOGGER } from '../mocks/services';

jest.mock('axios');

describe('WeatherService', () => {
    describe('# constructor()', () => {
        withData({
            _1_valid: [CONFIG, LOGGER, undefined, false],
            _2_notConfig: [undefined, LOGGER, 'System Error: cannot start WeatherService without app config.', true],
            _3_notLogger: [CONFIG, undefined, 'System Error: cannot start WeatherService without app logger.', true],
            _4_notParams: [undefined, undefined, 'System Error: cannot start WeatherService without app config.', true],
        }, (config, logger, messageExpected, mustFail) => {
            it(`should ${mustFail ? 'fail' : 'be valid'}.`, async () => {
                // Setup
                const opts = {
                    logger,
                    config,
                };

                try {
                    // Invocation
                    const result = new WeatherService(opts);

                    // Assertions
                    expect(!mustFail).toBeTruthy();
                    expect(result).toBeDefined();
                } catch (error) {
                    // Assertions
                    expect(mustFail).toBeTruthy();
                    expect(error).toBeDefined();
                    expect(error.message).toEqual(messageExpected);
                }
            });
        });
    });

    describe('# getWeatherFor()', () => {
        withData({
            _1_valid: ['us', '90404', { data: FORECAST_RESPONSE }],
        }, (countryCode, zipCode, response) => {
            it('should get valid data.', async () => {
                // Setup
                axios.get
                    .mockImplementationOnce(() => Promise.resolve(response))
                    .mockImplementationOnce(() => Promise.resolve(UVI_RESPONSE));

                // axios.get
                //     .mockReturnValueOnce(Promise.resolve(response))
                //     .mockReturnValueOnce(Promise.resolve(UVI_RESPONSE));
                const service = new WeatherService(SERVICE_CONFIG);

                // Invocation
                const result = await service.getWeatherFor(countryCode, zipCode);

                // Assertions
                expect(result).toBeDefined();
                expect(result.success).toBeTruthy();
                expect(result.data).toBeDefined();
                expect(result.data.city).toBeDefined();
                expect(result.data.city.coord).toEqual(FORECAST_RESPONSE.city.coord);
                expect(result.data.city.country).toEqual(FORECAST_RESPONSE.city.country);
                expect(result.data.city.name).toEqual(FORECAST_RESPONSE.city.name);
                expect(result.data.city.coord).toEqual(FORECAST_RESPONSE.city.coord);
                expect(result.data.city.sunrise).toEqual(FORECAST_RESPONSE.city.sunrise * 1000);
                expect(result.data.city.sunset).toEqual(FORECAST_RESPONSE.city.sunset * 1000);
                expect(result.data.weather).toBeDefined();
            });
        });

        withData({
            _1_countryNotFound: ['us', '90109a', 'city not found'],
            _2_cityNotFound: ['os', '90109', 'country not found'],
        }, (countryCode, zipCode, expectedMessage) => {
            it('should not get valid data.', async () => {
                // Setup
                jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: new BadRequestError(expectedMessage) } });
                const service = new WeatherService(SERVICE_CONFIG);

                // Invocation
                const asyncResult = service.getWeatherFor(countryCode, zipCode);

                // Assertions
                const result = await expect(asyncResult);
                result.rejects.toThrow(BadRequestError);
            });
        });
    });

    describe('# getUviFor()', () => {
        withData({
            _1_basic: [32.99, 56.911, UVI_RESPONSE],
        }, (lat, lon, response) => {
            it('should get valid data.', async () => {
                // Setup
                axios.get.mockImplementationOnce(() => Promise.resolve(response));
                const service = new WeatherService(SERVICE_CONFIG);

                // Invocation
                const result = await service.getUviFor(lat, lon);

                // Assertions
                expect(result).toBeDefined();
                expect(result.success).toBeTruthy();
                expect(result.data).toBeDefined();
                expect(result.data.lat).toBeDefined();
                expect(result.data.lon).toBeDefined();
                expect(result.data.date_iso).toBeDefined();
                expect(result.data.date).toBeDefined();
                expect(result.data.value).toBeDefined();
            });
        });

        withData({
            _1_latInvalid: [-200, 67.990, 'Latitude or / and longitude are invalid.'],
            _2_lonInvalid: [47.11, 198.99, 'Latitude or / and longitude are invalid.'],
        }, (lat, lon, expectedMessage) => {
            it('should fail due to invalid lat and / or lon.', async () => {
                // Setup
                const service = new WeatherService(SERVICE_CONFIG);

                try {
                    // Invocation
                    await service.getUviFor(lat, lon);

                    // Assertions
                    expect(false).toBeTruthy();
                } catch (error) {
                    // Assertions
                    expect(error).toBeDefined();
                    expect(error.message).toEqual(expectedMessage);
                }
            });
        });

        withData({
            _1_latInvalid: [70.88, 67.990, 'Invalid message A'],
            _2_lonInvalid: [47.11, 68.99, 'Invalid message B'],
        }, (lat, lon, expectedMessage) => {
            it('should not get valid data.', async () => {
                // Setup
                jest.spyOn(axios, 'get').mockRejectedValue({ response: { data: new BadRequestError(expectedMessage) } });
                const service = new WeatherService(SERVICE_CONFIG);

                // Invocation
                const asyncResult = service.getUviFor(lat, lon);

                // Assertions
                const result = await expect(asyncResult);
                result.rejects.toThrow(BadRequestError);
            });
        });
    });
});
