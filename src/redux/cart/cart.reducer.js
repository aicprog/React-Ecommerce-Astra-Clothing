import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
    hidden: true
}

const {TOGGLE_HIDDEN_CART} = CartActionTypes

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case TOGGLE_HIDDEN_CART:
            return {...state, hidden: !state.hidden}
            
        default:
            return state
    }
}

export default cartReducer