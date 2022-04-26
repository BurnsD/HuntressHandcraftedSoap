import React from 'react';
import HeroImg from '../../assets/processed-3b15c290-7fe3-491a-b185-9250b1d6b75a_LXPUC0Te_finished.jpg';

function Hero() {
    return(
        <div >
            <div className='mw-100 mh-100'>
                <img src={HeroImg} className='img-fluid'alt='' />
            </div>   
        </div>
    )
}

export default Hero;