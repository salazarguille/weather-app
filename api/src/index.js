// eslint-disable-next-line import/no-extraneous-dependencies
import '@babel/polyfill';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';
import config from './env';
import buildServices from './services';
import Logger from './utils/logger';

const logger = new Logger();

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
    cors({
        exposedHeaders: config.CORS_HEADERS,
    }),
);

app.use(
    bodyParser.json({
        limit: config.BODY_LIMIT,
    }),
);

const startServer = () => {
    const services = buildServices({ config, logger });
    const opts = { config, services, logger };

    // internal middleware
    app.use(middleware(opts));

    // api router
    app.use('/api/v1', api(opts));

    app.server.listen(config.SERVER_API_PORT, () => {
        console.log(`Started on port ${app.server.address().port}`);
    });
};

startServer();

export default app;
