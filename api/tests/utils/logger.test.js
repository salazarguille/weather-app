import { withData } from 'leche';
import Logger from '../../src/utils/logger';

describe('Logger', () => {
    let logger;
    let infoFunction;
    let errorFunction;
    let debugFunction;

    beforeEach(() => {
        logger = new Logger();
        infoFunction = jest.spyOn(global.console, 'info');
        errorFunction = jest.spyOn(global.console, 'error');
        debugFunction = jest.spyOn(global.console, 'debug');
    });

    afterEach(() => {
        infoFunction.mockClear();
        errorFunction.mockClear();
        debugFunction.mockClear();
    });

    describe('# info(msg, params)', () => {
        withData({
            _1_basic: ['My message', []],
        }, (message, params) => {
            it('Should log a message as info.', () => {
                // Setup

                // Invocation
                logger.info(message, params);

                // Assertions
                expect(infoFunction).toHaveBeenCalledTimes(1);
                expect(errorFunction).toHaveBeenCalledTimes(0);
                expect(debugFunction).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe('# error(error, msg, params)', () => {
        withData({
            _1_basic: [new Error('Error'), 'My message', []],
        }, (error, message, params) => {
            it('Should log a message as error.', () => {
                // Setup

                // Invocation
                logger.error(error, message, params);

                // Assertions
                expect(infoFunction).toHaveBeenCalledTimes(0);
                expect(errorFunction).toHaveBeenCalledTimes(2);
                expect(debugFunction).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe('# debug(msg, params)', () => {
        withData({
            _1_basic: ['My message', []],
        }, (message, params) => {
            it('Should log a message as debug.', () => {
                // Setup

                // Invocation
                logger.debug(message, params);

                // Assertions
                expect(infoFunction).toHaveBeenCalledTimes(0);
                expect(errorFunction).toHaveBeenCalledTimes(0);
                expect(debugFunction).toHaveBeenCalledTimes(1);
            });
        });
    });
});
