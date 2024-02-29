import axios from 'axios';

import { 
    GET_COUNTRIES, 
    SET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_ID,
} from './action-type';

export const getFilteredCountries = (filters)=>{
    return async function(dispatch){
        try{
            const response = await axios.post('http://localhost:3001/countries/filter',filters);
            dispatch(
                {
                    type: GET_COUNTRIES,
                    payload: response.data
                }
            );
        } 
        catch(error){
            console.log('error al traer los paises de la db: ',error);
        }

    }
};
export const getCountryByID = (id)=>{
    return async function(dispatch) {
        try{
            const response = await axios.get(`http://localhost:3001/countries/${id}`);
            dispatch(
                {
                    type :GET_COUNTRY_BY_ID ,
                    payload :response.data
                }
            )
        } 
        catch(error){
            console.log('error al traer el pais: ',error)
        }
    }
};
export const setCountryDetail = (id)=>{
    return async function(dispatch){
        try{
            dispatch(
                {
                    type: SET_COUNTRY_DETAIL,
                    payload: id
                }
            )
        } 
        catch(error){
            console.log('error al señalar un id para el Detail: ',error);
        }   
    }
};

