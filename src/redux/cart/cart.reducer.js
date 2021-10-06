import { CartActionTypes } from "./cart.types";
import { addItemToCart, decreaseItem } from "./cart.utils";
import { removeItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true, 
    cartItems: []
}

const { TOGGLE_HIDDEN_CART, ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM } =
	CartActionTypes;

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
			case TOGGLE_HIDDEN_CART:
				return { ...state, hidden: !state.hidden };
			case ADD_ITEM:
				return {
					...state,
					cartItems: addItemToCart(state.cartItems, action.payload),
				};
			case REMOVE_ITEM:
                
				return {
					...state,
					cartItems: removeItem(state.cartItems, action.payload),
				};
			case DECREASE_ITEM:
				const newCart = decreaseItem(state.cartItems, action.payload)

				return {
					...state,
					cartItems: newCart,
				};

			default:
				return state;
		}
}

export default cartReducer