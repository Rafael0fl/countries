import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredCountries } from '../../redux/actions.js';

import Card from './Card/card.jsx';

import CSS from './Home.module.css';
import imagen28 from '../../assets/28.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const dispatch = useDispatch();

    const filteredCountries = useSelector(state=>state.countries);

    const [filters,setFilters] = useState({continent: null,activity: null});
    const [pages,setPages] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [page,setPage] = useState(1);

    const handleLast = ()=>{
        if(page>=2){
            setPage(page - 1);
        }
    };
    const handleNext = ()=>{
        if(page<25){
            setPage(page + 1);
        }
    };
    const handlePageButton = (selected)=>{
        setPage(selected)
    };
    const handleFilter = (filter)=>{
        switch(filter){
            case "TODOS": setFilters({...filters,continent:null});break;
            case "AMERICAS": setFilters({...filters, continent:"Americas" }); break;
            case "EUROPA": setFilters({...filters, continent:"Europe" });break;
            case "AFRICA": setFilters({...filters, continent:"Africa" }); break;
            case "ASIA": setFilters({...filters, continent:"Asia" }); break;
            case "OCEANIA": setFilters({...filters, continent:"Oceania" }); break;
            default : setFilters({...filters});
        }
        setPage(1);
    };

    useEffect(()=>{
            dispatch(getFilteredCountries(filters))
    },[filters]);

    useEffect(()=>{
        if(page>pages[9]){
            setPages(pages => pages.map(number => number + 1));
        }
        if(page<pages[0]){
            setPages(pages => pages.map(number => number - 1));
        }
    },[page]);

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
                        <button onClick={()=>handleFilter("TODOS")}>TODOS</button>
                        <button onClick={()=>handleFilter("AMERICAS")}>AMERICAS</button>
                        <button onClick={()=>handleFilter("AFRICA")}>AFRICA</button>
                        <button onClick={()=>handleFilter("ASIA")}>ASIA</button>
                        <button onClick={()=>handleFilter("EUROPA")}>EUROPA</button>
                        <button onClick={()=>handleFilter("OCEANIA")}>OCEANIA</button>
                        <button onClick={()=>handleFilter("A")}>ACTIVIDAD</button>
                    </div>
                </div>
            </div>
            <div className={CSS.showCountries}>
                <div className={CSS.paginado}>
                    <button onClick={handleLast} className={CSS.pageButton}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
                    {
                        filteredCountries[0] &&
                        (<button onClick={()=>{handlePageButton(pages[0])}} className={page === pages[0] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[0]}</button>)
                    }
                    {
                        filteredCountries[1] &&
                        (<button onClick={()=>{handlePageButton(pages[1])}} className={page === pages[1] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[1]}</button>)
                    }
                    {
                        filteredCountries[2] &&
                        (<button onClick={()=>{handlePageButton(pages[2])}} className={page === pages[2] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[2]}</button>)
                    }
                    {
                        filteredCountries[3] &&
                        (<button onClick={()=>{handlePageButton(pages[3])}} className={page === pages[3] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[3]}</button>)
                    }
                    {
                        filteredCountries[4] &&
                        (<button onClick={()=>{handlePageButton(pages[4])}} className={page === pages[4] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[4]}</button>)
                    }
                    {
                        filteredCountries[5] &&
                        (<button onClick={()=>{handlePageButton(pages[5])}} className={page === pages[5] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[5]}</button>)
                    }
                    {
                        filteredCountries[6] &&
                        (<button onClick={()=>{handlePageButton(pages[6])}} className={page === pages[6] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[6]}</button>)
                    }
                    {
                        filteredCountries[7] &&
                        (<button onClick={()=>{handlePageButton(pages[7])}} className={page === pages[7] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[7]}</button>)
                    }
                    {
                        filteredCountries[8] &&
                        (<button onClick={()=>{handlePageButton(pages[8])}} className={page === pages[8] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[8]}</button>)
                    }
                    {
                        filteredCountries[9] &&
                        (<button onClick={()=>{handlePageButton(pages[9])}} className={page === pages[9] ? CSS.pageButtonSelected : CSS.pageButton}>{pages[9]}</button>)
                        
                    }
                    <button onClick={handleNext} className={CSS.pageButton}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className={CSS.pagina}>
                    <Card country={filteredCountries[page-1]}/>
                </div>
            </div>
        </div>
    );
};

export default Home;


    /*
    const buttons = Array.from({length:10}).map((_,index)=>{
        return(
            <button 
                key={index}
                onClick={()=>{handlePageButton(pages[index])}}
                className={page === pages[index] ? CSS.pageButtonSelected : CSS.pageButton}
            >{index+1}</button>
        )
    })
    */