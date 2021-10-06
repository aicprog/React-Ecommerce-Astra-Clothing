import React from 'react'
import styled from 'styled-components'


//redux 
import { connect } from "react-redux";
import { decreaseItem, removeItemFromCart } from '../../redux/cart/cart.actions';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, removeItem, increaseItem, decreaseItem}) => {

    const {id, name, imageUrl, price, quantity} = cartItem
    return (
			<Wrapper>
				<div className="image-container">
					<img src={imageUrl} alt="item" />
				</div>
				<span className="name">{name}</span>
				<span className="quantity">
					<div className="arrow" onClick={() => decreaseItem(id)}>&#10094;</div>
					<span className="value">{quantity}</span>
					<div className="arrow" onClick={() => increaseItem(cartItem)}>&#10095;</div>
				</span>
				<span className="price">${price}</span>
				<div className="remove-button" onClick={() => removeItem(id)}>
					&#10005;
				</div>
			</Wrapper>
		);
}

const mapDispatchToProps = (dispatch) => ({
	removeItem: (id) => dispatch(removeItemFromCart(id)),
    increaseItem: (item) => dispatch(addItemToCart(item)), 
    decreaseItem: (id) => dispatch(decreaseItem(id))
});

export default connect(null, mapDispatchToProps)(CheckoutItem)

const Wrapper = styled.div`

		width: 100%;
		display: flex;
		min-height: 100px;
		border-bottom: 1px solid darkgrey;
		padding: 15px 0;
		font-size: 20px;
		align-items: center;

		.image-container {
			width: 23%;
			padding-right: 15px;

			img {
				width: 100%;
				height: 100%;
			}
		}
		.name,
		.quantity,
		.price {
			width: 23%;
		}

		.quantity {
			display: flex;

			.arrow {
				cursor: pointer;
			}

			.value {
				margin: 0 10px;
			}
		}

		.remove-button {
			padding-left: 12px;
			cursor: pointer;
		}
`;


