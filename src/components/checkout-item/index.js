import React from 'react'
import styled from 'styled-components'


//redux 
import { connect } from "react-redux";
import { removeItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem: {id, name, imageUrl, price, quantity}, removeItem}) => {
    return <Wrapper>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(id)}>&#10005;</div>
    
    </Wrapper>;
}

const mapDispatchToProps = (dispatch) => ({
	removeItem: (id) => dispatch(removeItemFromCart(id)),
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
        padding-left: 20px;
    }

    .remove-button {
        padding-left: 12px;
        cursor: pointer;
    }
`;


