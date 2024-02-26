import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import Router from './routes/Router.js';

const server = express();

//midlewares

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());

//routes
server.use(Router);

export default server;