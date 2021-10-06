import {createSelector} from 'reselect'

//two types: input selector: function that gets whole state and returns slice of it && output selector: 

//get cart from state
const selectCart = state => state.cart

//get cart items from cart
export const selectCartItems = createSelector (
    [selectCart], 
    cart => cart.cartItems 
)

//use quanitities of cart items to reduce to total quanitity
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((total, item) => {
		total += item.quantity;
		return total;
	}, 0)
);