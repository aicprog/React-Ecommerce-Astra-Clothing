import React from 'react'
import RectangularBtn from '../custom-buttons/rectangular-btn'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CartItem from '../cart-item'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItems } from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect'
import { Link } from 'react-router-dom'

const CartDropdown = ({cartItems, dispatch}) => {

    return (
			<Container>
				<div className="cart-items">
					{cartItems.length ? (
						cartItems.map((item) => {
							return <CartItem key={item.id} item={item} />;
						})
					) : (
						<span className="empty-message">Your cart is empty</span>
					)}
				</div>
				<Link to="/cart">
					<RectangularBtn onClick={() => dispatch(toggleCartHidden())}>
						Go To checkout
					</RectangularBtn>
				</Link>
			</Container>
		);
}


const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});





export default connect(mapStateToProps)(CartDropdown);


const Container = styled.div`
		position: absolute;
		width: 240px;
		height: 340px;
		display: flex;
		flex-direction: column;
		padding: 20px;
		border: 1px solid black;
		background-color: white;
		top: 90px;
		right: 40px;
		z-index: 5;

		.empty-message{
			font-size: 18px;
			margin: 50px auto;
		}

		.cart-items {
			height: 240px;
			display: flex;
			flex-direction: column;
			overflow: scroll;
		}

		button {
			margin-top: auto;
		}
`;