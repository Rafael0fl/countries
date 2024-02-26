import { GET_ALL_COUNTRIES } from './action-type.js';

const initialState = {
    countries: [],
}

const reducer = ( state=initialState, action ) =>{
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };
        default:
            return {...state}
    }
}

export default reducer;