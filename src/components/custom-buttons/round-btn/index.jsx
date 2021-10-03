import React from 'react';
import './round-btn.scss'
import {Link} from 'react-router-dom'



const RoundButton = ({children, isBlack, goTo}) =>{
    return(
        <Link className={`${isBlack ? 'black': 'white'} hero-btn`} to={goTo}>
            {children}
        </Link>
    )
}

export default RoundButton;