import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../../utils/constants";
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai'


import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/navbar/navbar.actions";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
	//const { isSidebarOpen, toggleSidebar } = useProductsContext();
	console.log("state", isSidebarOpen)

	return (
		<SidebarContainer>
			<aside
				className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
			>
				<div className="sidebar-header">
					<img src={logo} className="logo" alt="snugnsleep" />
					<button className="close-btn" type="button" onClick={toggleSidebar}>
						<FaTimes />
					</button>
				</div>
				<ul className="links">
					{links.map(({ id, text, url }) => {
						return (
							<li key={id}>
								<Link to={url} onClick={toggleSidebar}>
									{text}
								</Link>
							</li>
						);
					})}
					<Link to="/cart" className="cart-btn-wrapper" onClick={toggleSidebar}>
						<AiOutlineShoppingCart/> Cart
					</Link>
				</ul>
			</aside>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	text-align: center;
	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
	}
	.close-btn {
		font-size: 2rem;
		background: transparent;
		border-color: transparent;
		transition: all 0.3s linear;
		cursor: pointer;
		color: rgba(255, 255, 255, 0.7);
		margin-top: 0.2rem;
	}
	.close-btn:hover {
		color: #fff;
	}
	.logo {
		justify-self: center;
		height: 60px;
	}
	.links {
		margin-bottom: 2rem;
	}
	.links a {
		display: block;
		text-align: left;
		font-size: 1rem;
		text-transform: capitalize;
		padding: 1rem 1.5rem;
		color: #fff;
		transition: all 0.3s linear;
		letter-spacing: 0.1rem;
	}
	.links a:hover {
		padding: 1rem 1.5rem;
		padding-left: 2rem;
		background: rgba(255, 255, 255, 0.8);
		color: #000
	}
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(76, 76, 76);
		transition: all 0.3s linear;
		transform: translate(-100%);
		z-index: -1;
	}
	.show-sidebar {
		transform: translate(0);
		z-index: 999;
	}
	.cart-btn-wrapper {
		margin: 2rem auto;
	}
	@media screen and (min-width: 992px) {
		.sidebar {
			display: none;
		}
	}
`;

const mapStateToProps = (state) => ({
     isSidebarOpen: state.navbar.isSidebarOpen
})
    

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: (user) => dispatch(toggleSidebar()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
