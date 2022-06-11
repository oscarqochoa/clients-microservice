import { Express } from 'express';

import clientsRouter from './clients/clients.router';

export const Routes = (app: Express) => {
    app.use('/api/clients', clientsRouter);
};
