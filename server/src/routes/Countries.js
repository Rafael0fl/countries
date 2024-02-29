import express from 'express';


import {
    getAllCountries,
    getCountryByID,
    filterCountries,
} from '../controllers/countries.controller.js';

const countries = express.Router();

countries.get('/',getAllCountries);
countries.get('/:id',getCountryByID);
countries.post('/filter',filterCountries);

export default countries;