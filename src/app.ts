import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

import clientsRouter from './routes/clients.router'

// settings
app.set("port", 4000)

// middlewares
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/api', clientsRouter)

export default app;