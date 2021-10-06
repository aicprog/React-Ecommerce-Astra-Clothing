import React from 'react'
import styled from 'styled-components'

//redux and selectors
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
const CheckoutPage = ({cartItems, total}) => {
    return (
			<Wrapper>
				<div className="checkout-header">
					<div className="header-block">
						<span>Product</span>
					</div>
					<div className="header-block">
						<span>Description</span>
					</div>
					<div className="header-block">
						<span>Quantity</span>
					</div>
					<div className="header-block">
						<span>Remove</span>
					</div>
				</div>
				{cartItems.map((item) => {
					return <div>{item.name}</div>;
				})}
                <div className="total">
                    <span>TOTAL: ${total}</span>
                </div>
			</Wrapper>
		);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage)


const Wrapper = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

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
            }
        }
    }

    .total {
        margin-top: 30px;
        margin-left: auto;
        font-size: 36px;
    }
`;

