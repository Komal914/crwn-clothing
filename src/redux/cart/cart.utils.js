/*Utility functions allow us to 
keep our files clean and organize 
functions that we may need in multiple 
files in one location
*/

//updates quanitity and add items into the cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //checks if this item is already in the cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //if this item is already in the cart
  if (existingCartItem) {
    //we want to return a new object so that react can rerender
    //return a new array with the same items but the quantity of item chosen by 1
    return cartItems.map(
      (cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem //otherwise, if they dont match -> return the item
    );
  }

  //if cartItem is not inside our array,
  // return what is inside already + the new item -> a new object to add with the quanitity of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
