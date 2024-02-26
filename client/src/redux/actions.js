import axios from 'axios';

import { GET_ALL_COUNTRIES } from './action-type';

export const getAllCountries = ()=>{
    return async function(dispatch){
        try{
            const response = await axios.get('http://localhost:3001/countries');
            dispatch(
                {
                    type: GET_ALL_COUNTRIES,
                    payload: response.data
                }
            );
        } 
        catch(error){
            console.log('error al traer los paises de la db');
        }

    }
};
/*
export const setLoginON = ()=>{
    return {
        type: LOGIN_ON,
        payload: true
    }
};
*/
