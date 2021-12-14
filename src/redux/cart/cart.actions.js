import CarTActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CarTActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CarTActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CarTActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
