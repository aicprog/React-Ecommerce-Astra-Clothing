import React from 'react';
import './hero.s.scss'
import {Link} from 'react-router-dom'
import imageBG from '../../assets/hero-img1.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div
                className='image'
                style={{backgroundImage: `url(${imageBG})`}}>
                <div className="hero-content">
                    <h1 className="hero-text">Fall Collection is here.</h1>
                    <h1 className="hero-text-mb">Fall is here.</h1>
                    <div className="btn-wrapper">
                        <Link className="hero-btn"  to='/shop'>
                            Shop Fall
                        </Link>
                        <Link className="hero-btn" to='/shop'>
                            Shop all
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Hero