import { Router } from 'express';
import { version } from '../../package.json';
import weatherRoutes from './weather.routes';

export default (opts) => {
    const api = Router();

    api.get('/', (req, res) => res.json({ version }));

    api.use('/weather', weatherRoutes(opts));

    return api;
};
