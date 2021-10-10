import React, {useState} from 'react'
import './header.scss'
import {Link} from 'react-router-dom'
import { GiTargetShot } from 'react-icons/gi';
import {connect} from 'react-redux'
import { FaBars } from "react-icons/fa";


//firebase 
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

//selectors
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { toggleSidebar } from "../../redux/navbar/navbar.actions";

const Header = ({currentUser, hidden, toggleSidebar}) => {
    

    
    return (
			<nav className="header">
				<div className="header-wrapper">
					<Link className="logo-container" to="/">
						<GiTargetShot size="3rem" />
						<span className="logo-title">Astrac</span>
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
							<div className="menu-option" onClick={() => auth.signOut()}>
								Sign Out
							</div>
						) : (
							<Link className="menu-option" to="/signin">
								Sign In
							</Link>
						)}

						<CartIcon className="menu-option" />
					</div>
					{hidden ? null : <CartDropdown />}

					<FaBars className="burger" onClick={toggleSidebar}/>
				</div>
			</nav>
		);
}

const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser, 
	hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: () => dispatch(toggleSidebar()),
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Header)