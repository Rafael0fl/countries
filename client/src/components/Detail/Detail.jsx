import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCountryByID } from "../../redux/actions.js";

import CSS from './Detail.module.css';

const Detail = ()=>{
    const dispatch = useDispatch();
    const redirect = useNavigate();
    const idCountry = useSelector(state => state.countryDetail);
    const country = useSelector(state => state.country);

    useEffect(()=>{
        if(idCountry){
            dispatch(getCountryByID(idCountry));
        }
        else{
            redirect('/home');
        }
    },[]);

    return(
        <div className={CSS.container}>
            <div className={CSS.countryCard}>
                <div className={CSS.divImg}>
                    <img src={country.imagenBandera} alt="bandera"/>
                </div>
                <div className={CSS.divInfo}>
                    <div className={CSS.info}>
                        <p>Pais: {country.nombre}</p>
                        <p>Capital: {country.capital}</p>
                        <p>Continente: {country.continente}</p>
                        <p>Poblacion: {country.poblacion}</p>
                    </div>
                    <div className={CSS.activities}>
                        <p>ACTIVIDADES</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Detail;