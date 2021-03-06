import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

//initially the cart dropdown should be hidden
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

//this is the cart reducser-> it will toggle the value of hidden upon actions from the user
const cartReducer = (state = INITIAL_STATE, action) => {
  //switch the updates to dif action
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
