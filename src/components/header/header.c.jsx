import React from 'react'
import './header.s.scss'
import {Link} from 'react-router-dom'
import { GiTargetShot } from 'react-icons/gi';

const Header = () => {
    return(
        <nav className='header'>
            <div className="header-wrapper">
                <Link className="logo-container" to='/'>
                        <GiTargetShot size="3rem"/>
                        <span className="logo-title">Astra</span>

                </Link>

                <div className="menu-options">
                    <Link className="menu-option" to='/about'>
                        About
                    </Link>

                    <Link className="menu-option" to='/shop'>
                        Shop
                    </Link>

                    <Link className="menu-option" to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
           
        </nav>
    )
}

export default Header