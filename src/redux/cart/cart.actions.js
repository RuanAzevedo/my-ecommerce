import CarTActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CarTActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CarTActionTypes.ADD_ITEM,
  payload: item,
});
