/*Utility functions allow us to 
keep our files clean and organize 
functions that we may need in multiple 
files in one location
*/

export const addItemToCart = (cartItems, cartItemToAdd) => {
  //checks if this item is already in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //if this item is already in the cart
  if (existingCartItem) {
    //return a new array with matching item and increase the quantity of items by 1
    return cartItems.map(
      (cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem //otherwise, if they dont match -> return the item
    );
  }

  //if cartItem is not inside our array, return what is inside already and add an object -> a new item to add with the quanitity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
