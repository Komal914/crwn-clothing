import CartActionTypes from "./cart.types";

//function to toggle the carts upon click, uses the type we assigned in cart types
//sends the action to our reducer
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
