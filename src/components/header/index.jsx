import React, {useState} from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import { GiTargetShot } from 'react-icons/gi';
import {connect} from 'react-redux'


//firebase 
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

//selectors
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) => {
    

    
    return (
			<nav className="header">
				<div className="header-wrapper">
					<Link className="logo-container" to="/">
						<GiTargetShot size="3rem" />
						<span className="logo-title">Astra</span>
					</Link>

					<div className="menu-options">
						<Link className="menu-option" to="/">
							Home
						</Link>

						<Link className="menu-option" to="/about">
							About
						</Link>

						<Link className="menu-option" to="/shop">
							Shop
						</Link>

						{currentUser ? (
							<div
								className="menu-option"
								onClick={() => auth.signOut()}
							>
								Sign Out
							</div>
						) : (
							<Link className="menu-option" to="/signin">
								Sign In
							</Link>
						)}
						
						<CartIcon className="menu-option"/>

						
					</div>
					{hidden ? null : <CartDropdown />}

					<div className="burger">
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
				</div>
			</nav>
		);
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser, 
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)