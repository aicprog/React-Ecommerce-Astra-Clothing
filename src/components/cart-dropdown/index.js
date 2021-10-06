import React from 'react'
import RectangularBtn from '../custom-buttons/rectangular-btn'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CartItem from '../cart-item'
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({cartItems}) => {
    return (
			<Container>
				<div className="cart-items">
					{cartItems.map((item) => {
						return <CartItem key={item.id} item={item} />;
					})}
				</div>
				<RectangularBtn>Go To checkout</RectangularBtn>
			</Container>
		);
}


const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
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