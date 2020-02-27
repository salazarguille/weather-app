import { withData } from 'leche';
import { groupByDay, mapWeatherItemTimestamp, getMinMaxTemps } from '../../src/utils/array';

describe('util/array', () => {
    describe('# groupByDay({ dt })', () => {
        withData({
            _1_basic: [2020, 2, 1, 18322],
        }, (year, month, day, expected) => {
            it('Should group by day.', () => {
                // Setup
                const date = new Date(year, month, day);

                // Invocation
                const result = groupByDay({ dt: date });

                // Assertions
                expect(result).toEqual(expected);
            });
        });
    });

    describe('# mapWeatherItemTimestamp (item)', () => {
        withData({
            _1_basic: [new Date(2020, 2, 1), [{}]],
        }, (date, weather) => {
            it('Should max item timestamp.', () => {
                // Setup
                const item = {
                    dt: date.getTime(),
                    weather,
                };

                // Invocation
                const { dt, weather: weatherResult } = mapWeatherItemTimestamp(item);

                // Assertions
                expect(dt).toEqual(date.getTime() * 1000);
                expect(weather).toEqual([weatherResult]);
            });
        });
    });

    describe('# getMinMaxTemps (item)', () => {
        const oneItem = [{ main: { temp_min: 10, temp_max: 25 } }];
        const twpItems = [{ main: { temp_min: 10, temp_max: 19 } }, { main: { temp_min: 13, temp_max: 15 } }];
        
        withData({
            _1_oneItem: [oneItem, 10, 25],
            _2_twoItems: [twpItems, 10, 19],
        }, (list, minTempExpected, maxTempExpected) => {
            it('Should get min/max temps.', () => {
                // Setup;

                // Invocation
                const { maxTemp, minTemp } = getMinMaxTemps(list);

                // Assertions
                expect(minTemp).toEqual(minTempExpected);
                expect(maxTemp).toEqual(maxTempExpected);
            });
        });
    });
});
