import CartActionTypes from "./cart.types";

const { TOGGLE_HIDDEN_CART, ADD_ITEM} = CartActionTypes;

export const toggleCartHidden = () =>({
    type: TOGGLE_HIDDEN_CART
})
export const addItemToCart = (item) =>({
    type: ADD_ITEM, 
    payload: item
})
