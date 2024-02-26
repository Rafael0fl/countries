import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllCountries } from '../../redux/actions.js';

import CSS from './Home.module.css';
import imagen28 from '../../assets/28.gif';

const Home = () => {
    const dispatch = useDispatch();

    const countriesList = useSelector(state=>state.countries);
    //const [countries,setCountries] = useState([]);

    /* ------------------------------------------- */
    useEffect(()=>{
        dispatch(getAllCountries());
    },[]);
  
    return (
        <div className={CSS.container}>
            <div className={CSS.Finders}>
                <div className={CSS.imagenFinders}>
                    <img src={imagen28} alt="globo terraqueo sobre libros" className={CSS.imagenSelected} />
                </div>
                <div className={CSS.boxSearch}>
                    <div className={CSS.searchBar}>
                        <input 
                            type="text" 
                            className={CSS.inputSearchBar} 
                        />
                        <button
                            className={CSS.buttonSearchBar}
                            >ir
                        </button>
                    </div>
                    <div className={CSS.filters}>
                        <button>AMERICAS</button>
                        <button>AFRICA</button>
                        <button>ASIA</button>
                        <button>EUROPA</button>
                        <button>OCEANIA</button>
                        <button>ACTIVIDAD</button>
                    </div>
                </div>
            </div>
            <div className={CSS.showCountries}>
                <div className={CSS.paginado}>
                    <p>paginado</p>
                </div>
                <div className={CSS.pagina}>
                    <div>
                        {
                            countriesList[0] ? countriesList[0].nombre : 'empy'
                        }
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>
            </div>
        </div>
    );
};

export default Home;

