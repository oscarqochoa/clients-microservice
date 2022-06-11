import { Server } from './presentation/configuration/server';
import { Mongo } from './infrastructure/database/connection';

const server = new Server();

server.start();

const mongo = new Mongo();

mongo.connect();