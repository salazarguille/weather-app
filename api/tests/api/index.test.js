import { withData } from 'leche';
import buildApis from '../../src/api';
import { CONTROLLER_CONFIG } from '../mocks/services';

describe('api/index', () => {
    describe('# buildApis()', () => {
        withData({
            _1_valid: [CONTROLLER_CONFIG],
        }, (opts) => {
            it('should create an APIs object.', async () => {
                // Setup

                // Invocation
                const result = buildApis(opts);

                // Assertions
                expect(result).toBeDefined();
                expect(result.stack).toBeDefined();
                expect(result.stack).toHaveLength(2);
            });
        });
    });
});
