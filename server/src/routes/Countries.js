import express from 'express';


import {
    getAllCountries,
} from '../controllers/countries.controller.js';

const countries = express.Router();

countries.get('/',getAllCountries);
countries.get('/:id',()=>console.log('hola'));

export default countries;