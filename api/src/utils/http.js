/* eslint-disable import/prefer-default-export */
import BadRequestError from './error/BadRequestError';

export const respondHttp = (promise, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res, next) : [];
    try {
        const result = await promise(...boundParams);
        return res.status(200).send(result || { success: true, message: 'Ok' });
    } catch (error) {
        console.log(error);
        if (error instanceof BadRequestError) {
            return res.status(400).send({
                success: false,
                message: error.message,
            });
        }
        // unexpected error
        return res.status(500).send({
            message: 'An unexpected error occurred.',
        });
    }
};
