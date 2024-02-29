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

export const getCountryByID = async(req,res) =>{
    try{
        const { id } = req.params;
        let countryByID = await country.findByPk(id);
        if(!countryByID){
            return res.status(404).json({message:`No hay Ningun pais con ese id:${id}`})
        }
        res.status(200).json(countryByID);
    } 
    catch(error){
        return res.status(404).json({message:error.message});
    }
};

export const filterCountries = async(req,res)=>{
    try{
        const { continent, activity }  = req.body;
        let filteredCountries = [];
        const chunkSize = 10;
        const chunkedCountries = [];

        if(!continent && !activity){
            filteredCountries = await country.findAll();
        }
        else if(!continent && activity){
            filteredCountries = await country.findAll({where:{activity:activity}});
        }
        else if(continent && !activity){
            if(continent === "Americas"){
                const south = await country.findAll({where:{continente: "South America"}});
                const north = await country.findAll({where:{continente:"North America"}});
                filteredCountries =  [...south, ...north];
            }else{
                filteredCountries =  await country.findAll({where:{continente:continent}})
            }
        }
        else if(continent && activity){
            filteredCountries = await country.findAll({where:{continente:continent, activity:activity}})
        }
        

        for(let i=0;i<filteredCountries.length;i+=chunkSize) {
            const chunk = filteredCountries.slice(i, i + chunkSize);
            while(chunk.length < chunkSize){
                chunk.push(null);
            }
            chunkedCountries.push(chunk);
        }

        res.status(200).json(chunkedCountries);
    } 
    catch (error){
        return res.status(404).json({message:error.message});
    }
};