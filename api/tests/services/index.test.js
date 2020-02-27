import { withData } from 'leche';
import buildServices from '../../src/services';

describe('services/index', () => {
    describe('# buildServices()', () => {
        withData({
            _1_valid: [],
        }, () => {
            it('should create a services object.', async () => {
                // Setup
                const opts = { config: {}, logger: {} };

                // Invocation
                const result = buildServices(opts);

                // Assertions
                expect(result).toBeDefined();
                expect(result.weatherService).toBeDefined();
            });
        });
    });
});
