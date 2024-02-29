import { 
    GET_COUNTRIES,
    SET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_ID, 
} from './action-type.js';

const initialState = {
    countries: [],
    country: [],
    page: 1, // recordar en que pagina estaba
    countryDetail: 0,
}

const reducer = ( state=initialState, action ) =>{
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            };
        case SET_COUNTRY_DETAIL:
            return{
                ...state,
                countryDetail: action.payload
            }
        case GET_COUNTRY_BY_ID:
            return{
                ...state,
                country: action.payload
            }
        default:
            return {...state}
    }
}

export default reducer;