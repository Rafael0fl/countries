import { country } from '../models/country.model.js';

export const getAllCountries = async(req,res)=>{
    try{
        const countries = await country.findAll();
        res.status(200).json(countries);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }
};