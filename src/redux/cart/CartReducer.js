import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  CONFIRM_ORDER,
  ORDER_BILLED
} from "./cartActionTypes";
import { addItemToCart, totalAdd, totalSub } from "./cartUtils";

const initState = {
  hidden: true,
  cartItems: [],
  billedItems: [],
  total: 0,
  billTotal: 0
};

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        total: totalAdd(state.total, action.price)
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
        total: totalSub(state.total, action.payload)
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        billedItems: [...state.billedItems, state.cartItems],
        cartItems: [],
        billTotal: totalAdd(state.billTotal, state.total),
        total: 0
      };
    case ORDER_BILLED:
      return {
        ...state,
        billedItems: [],
        cartItems: [],
        total: 0,
        billTotal: 0
      };
    default:
      return state;
  }
};

export default cardReducer;
