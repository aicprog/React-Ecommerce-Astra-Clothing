
//add and/or increase items
export const addItemToCart = (cartItems, newCartItem) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === newCartItem.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === newCartItem.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...newCartItem, quantity: 1 }];
};

//remove Item
export const removeItem = (cartItems, id) => {
	return cartItems.filter((item) => item.id !== id);

};


//decrease item
export const decreaseItem = (cartItems, id) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === id
	);

	if (existingCartItem.quantity <=1){
		return removeItem(cartItems, id)
	}

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}


}