import { Express } from 'express';
import bodyParser from 'body-parser';
import { CorsMiddleware } from './cors.middleware';
import { ErrorMiddleware } from './error.middleware';

const request = (app: Express) => {
    app.use(CorsMiddleware);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};
const response = (app: Express) => {
    app.use(ErrorMiddleware);
};
export const Middlewares = {
    request,
    response
};