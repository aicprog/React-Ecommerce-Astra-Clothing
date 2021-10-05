import CartActionTypes from "./cart.types";

const {TOGGLE_HIDDEN_CART} = CartActionTypes

export const toggleCartHidden = () =>({
    type: TOGGLE_HIDDEN_CART
})