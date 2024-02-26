import { useNavigate } from 'react-router-dom';

import CSS from './LandingPage.module.css';
import tierraGirandoGif from '../../assets/27.gif';

const LandingPage = ()=>{

    const navigate= useNavigate();

    const handleGoHome = ()=>{
        navigate('/home');
    };

    return(
        <div className={CSS.container}>            
            <div className={CSS.main}>
                <div className={CSS.tittles}>
                    <div className={CSS.marco}>
                        <h1>PI COUNTRIES</h1>
                    </div>
                    <br></br>
                    <div className={CSS.marco}>
                        <h2>Lobo Rafael Francisco</h2>
                    </div>
                </div>
                <div className={CSS.divButton}>            
                    <div onClick={handleGoHome} className={CSS.all}>
                        <img className={CSS.planet} src={tierraGirandoGif} alt="GIF de la Tierra girando" />
                        <div className={CSS.buttonHome}>
                            <p>HOME</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;