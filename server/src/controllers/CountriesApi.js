import axios from 'axios';

import { country } from '../models/country.model.js';

export const getCountriesApi = async()=>{
    try{
        const response = await axios.get('http://localhost:5000/countries');
        const data = response.data;
        
        for(const pais of data){
            const { name,flags,continents,capital,population } = pais;
            await country.create({
                nombre: name.common,
                imagenBandera: flags.png,
                continente: continents[0],
                capital: capital ? capital[0] : 'no tiene',
                poblacion: population ? population : 0
            })
        }
        console.log('\x1b[32m%s\x1b[0m','\n\tDATOS COPIADOS DE LA API A LA BASE DE DATOS\n');
    } 
    catch(error){
        console.error('Error al obtener datos de la API:', error);
    }
};