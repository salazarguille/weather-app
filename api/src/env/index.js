import dotenv from 'dotenv';

export const DEFAULT_BODY_LIMIT = '100kb';
export const DEFAULT_PORT = 8080;
export const DEFAULT_CORS_HEADER = ['Link'];

dotenv.config({ silent: true });

const config = {
    BODY_LIMIT: process.env.BODY_LIMIT || DEFAULT_BODY_LIMIT,
    SERVER_API_PORT: process.env.SERVER_API_PORT || process.env.PORT || DEFAULT_PORT,
    WEATHER_API_URL: process.env.WEATHER_API_URL,
    OPEN_WEATHER_MAP_KEY: process.env.OPEN_WEATHER_MAP_KEY,
    CORS_HEADERS: process.env.CORS_HEADERS ? process.env.CORS_HEADERS.split(',') : DEFAULT_CORS_HEADER,
};

export default config;
