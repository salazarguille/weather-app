import { withData } from 'leche';
import { isValidLatitudAndLongitud } from '../../src/utils/validator';

describe('Validator', () => {
    describe('# isValidLatitudAndLongitud()', () => {
        withData({
            _1_basic: [37.3855, -122.088, true],
            _2_lat_invalid: [237.3855, -122.088, false],
            _3_lon_invalid: [33.1345, -222.088, false],
        }, (lat, lon, expected) => {
            it(`Lat or lon should be ${expected ? 'valid' : 'invalid'}.`, () => {
                // Setup

                // Invocation
                const result = isValidLatitudAndLongitud(lat, lon);

                // Assertions
                expect(result).toEqual(expected);
            });
        });
    });
});
