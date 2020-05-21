import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  CONFIRM_ORDER,
  ORDER_BILLED
} from "./cartActionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = (payload, price) => ({
  type: ADD_ITEM,
  payload,
  price
});

export const clearItemFromCart = payload => ({
  type: CLEAR_ITEM_FROM_CART,
  payload
});

export const confirmOrder = () => ({
  type: CONFIRM_ORDER
});

export const orderBilled = () => ({
  type: ORDER_BILLED
});
