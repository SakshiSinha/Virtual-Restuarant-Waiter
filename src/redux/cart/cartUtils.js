export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const totalAdd = (prevTotal, amount) => {
  const newTotal = prevTotal + amount;
  return newTotal;
};

export const totalSub = (prevTotal, item) => {
  const value = item.price * item.quantity;
  const newTotal = prevTotal - value;
  return newTotal;
};
