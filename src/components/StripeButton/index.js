import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { RectangularButton } from '..';
import logo from "../../assets/logo.png";
//import { formatPrice } from '../utils/helpers';


//turn to cents for stripe 
const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
	const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
    
    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    return (
			<StripeCheckout
				label="Proceed To Checkout"
				name="Astra Clothing"
				billingAddress
				shippingAddress
				image={logo}
				description={`Your total is $${price}`}
				panelLabel="Pay Now"
				token={onToken}
				stripeKey={publishableKey}
			>
			<RectangularButton>Checkout</RectangularButton>
			</StripeCheckout>
		);
}

export default StripeButton
