import express from 'express';

const Router = express.Router();

import countries from './Countries.js';
import saludo from './saludo.js';

Router.use('/',saludo);
Router.use('/countries',countries);



export default Router;

