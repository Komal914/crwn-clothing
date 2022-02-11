import CartActionTypes from "./cart.types";

//initially the cart dropdown should be hidden
const INITIAL_STATE = {
  hidden: true,
};

//this is the cart reducser-> it will toggle the value of hidden upon actions from the user
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
