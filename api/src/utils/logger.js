/* eslint-disable class-methods-use-this */
class Logger {
    info(msg, params) {
        console.info(`INFO: ${Date.now()} - ${msg}`, params);
    }

    debug(msg, params) {
        console.debug(`DEBUG: ${Date.now()} - ${msg}`, params);
    }

    error(error, msg, params) {
        console.error(`DEBUG: ${Date.now()} - ${msg}`, params);
        console.error(error);
    }
}

export default Logger;
