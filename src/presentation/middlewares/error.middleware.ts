import { NextFunction, Request, Response } from 'express';
import { isProduction } from '../configuration/environment'

type TypeError = 'BadRequest' | 'NotFound' | 'General';

export class HandleError extends Error {
    public readonly error: TypeError;

    constructor(options: { error: TypeError, message: string }) {
        super(options.message);
        this.message = options.message;
        this.error = options.error;
    }
}

export const ErrorMiddleware = (err: HandleError, _: Request, res: Response, __: NextFunction) => {
    let code;
    switch (err.error) {
        case 'BadRequest':
            code = 400;
            break;
        case 'NotFound':
            code = 404;
            break;
        default:
            code = 500;
    }
    if (isProduction()) {
        return res.status(code).send({
            status: 'error',
            message: err.message
        });
    } else {
        return res.status(code).send({
            status: 'error',
            message: err.message,
            stack: err.stack
        });
    }
};