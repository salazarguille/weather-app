import { withData } from 'leche';
import { getGeoCoords, getWeatherImagePath } from '../../src/data';

describe('data/index', () => {
    describe('# getGeoCoords()', () => {
        withData({
            _1_with3digits: ['602', 18.361945, -67.175597],
            _2_with5digits: ['99829', 58.104265, -135.399841],
        }, (zipCode, latExpected, lonExpected) => {
            it('should get the coords for zip code.', async () => {
                // Setup

                // Invocation
                const { lat, lon } = getGeoCoords(zipCode);

                // Assertions
                expect(lat).toEqual(latExpected);
                expect(lon).toEqual(lonExpected);
            });
        });

        withData({
            _1_with4digits: ['1312'],
            _2_with5digits: ['94229'],
        }, (zipCode) => {
            it('should NOT get the coords for zip code.', async () => {
                // Setup

                // Invocation
                try {
                    getGeoCoords(zipCode);
                    expect(false).toBeTruthy();
                } catch (error) {
                    // Assertions
                    expect(error).toBeDefined();
                    expect(error.message).toEqual('Invalid zip code.');
                }
            });
        });
    });

    describe('# getWeatherImagePath(weatherCode)', () => {
        withData({
            _1_lowerCase: ['50d', 'images/art_fog.png'],
            _2_upperCase: ['02N', 'images/art_light_clouds.png'],
        }, (weatherCode, resultExpected) => {
            it('should get the coords for zip code.', async () => {
                // Setup

                // Invocation
                const result = getWeatherImagePath(weatherCode);

                // Assertions
                expect(result).toEqual(resultExpected);
            });
        });

        withData({
            _1_with4digits: ['aa22'],
        }, (zipCode) => {
            it('should NOT get the coords for zip code.', async () => {
                // Setup

                // Invocation
                try {
                    getWeatherImagePath(zipCode);
                    expect(false).toBeTruthy();
                } catch (error) {
                    // Assertions
                    expect(error).toBeDefined();
                    expect(error.message).toEqual('Invalid weather code.');
                }
            });
        });
    });
});
