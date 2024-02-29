import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCountryDetail } from '../../../redux/actions.js';

import CSS from './card.module.css';

const Card = ({ country }) => {
    const dispatch = useDispatch();
    const redirect = useNavigate();

    const handleShowDetail = (id)=>{
        dispatch(setCountryDetail(id));
        redirect('/detail');
    };

    if (country) {
        return country.map(countryItem => {
            if (!countryItem) {
                return null;
            }
            return (
                <div key={countryItem.id} className={CSS.card} onClick={()=>handleShowDetail(countryItem.id)}> 
                    <div className={CSS.divImg}>
                        <img src={countryItem.imagenBandera} alt="imagen de la bandera" className={CSS.divImg} />
                    </div>
                    <div className={CSS.divInfo}>
                        <p className={CSS.recuadro}>{countryItem.nombre}</p>
                        <p className={CSS.recuadro}>{countryItem.continente}</p>
                    </div>
                </div>
            );
        });
    }
    return null;
};

export default Card;