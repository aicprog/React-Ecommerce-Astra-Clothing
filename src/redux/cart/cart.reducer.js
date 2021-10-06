import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true, 
    cartItems: []
}

const { TOGGLE_HIDDEN_CART, ADD_ITEM} = CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case TOGGLE_HIDDEN_CART:
            return {...state, hidden: !state.hidden}
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
        };

        default:
            return state
    }
}

export default cartReducer