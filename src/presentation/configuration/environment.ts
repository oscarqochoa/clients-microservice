import {config} from 'dotenv';

config();

export const environment = {
    production: process.env.PRODUCTION,
    mongo_uri: process.env.MONGO_URI,
};

export function isProduction(): boolean {
    return environment.production === 'true';
}