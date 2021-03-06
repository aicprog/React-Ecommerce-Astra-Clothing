import React from 'react'
import styled from 'styled-components'

//redux and selectors
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item';
import { RectangularButton, StripeButtonCheckout } from '../../components';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Link } from 'react-router-dom';


const CartPage = ({ cartItems, total, user }) => {
	return (
		<Wrapper>
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Name</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} cartItem={item} />;
			})}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
			<div className="btn">
					{user ? (
						<StripeButtonCheckout price={total} />
						) : (
							<Link to="/signin">
							<RectangularButton>Sign In To Checkout</RectangularButton>
							</Link>
					)}
					
			</div>
            <div className="test-card">* Please use the following test credit card for test payments: <div className="center"> 4242 4242 4242 4242 - Expo: 01/45 - CVV: 123  </div></div>
		</Wrapper>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
    user: selectCurrentUser
});

export default connect(mapStateToProps)(CartPage);


const Wrapper = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	@media (max-width: 776px) {
		width: 85%;
	}

	.checkout-header {
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid darkgrey;

		.header-block {
			text-transform: capitalize;
			width: 23%;

			&:last-child {
				width: 8%;

				@media (max-width: 600px) {
					width: 15%;
				}
			}
		}
	}

	.total {
		margin-top: 30px;
		margin-left: auto;
		font-size: 36px;
	}

	.test-card {
		padding-top: 2rem;
		color: red;

		.center {
			text-align: center;
		}
	}

	.btn {
		margin-top: 1.5rem;
	}
`;

