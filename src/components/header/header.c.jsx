import React from 'react'
import './header.s.scss'
import {Link} from 'react-router-dom'
import { GiTargetShot } from 'react-icons/gi';

//firebase 
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
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

                    {currentUser ? 
                        <div className="menu-option" onClick={() => auth.signOut()}>Sign Out</div>
                        :
                        <Link className="menu-option" to='/signin'>
                            Sign In
                        </Link>
                    }
                </div>

                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
           
        </nav>
    )
}

export default Header