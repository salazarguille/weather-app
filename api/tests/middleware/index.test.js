import { withData } from 'leche';
import buildMiddleware from '../../src/middleware';

describe('middleware/index', () => {
    describe('# buildMiddlewares()', () => {
        withData({
            _1_valid: [],
        }, (opts) => {
            it('should build middlewares.', async () => {
                // Setup

                // Invocation
                const result = buildMiddleware(opts);

                // Assertions
                expect(result).toBeDefined();
                expect(result.stack).toBeDefined();
                expect(result.stack).toHaveLength(0);
            });
        });
    });
});
