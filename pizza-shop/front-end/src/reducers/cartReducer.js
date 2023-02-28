// @ts-nocheck
export const cartReducer = (state = { cartItemsFromStorage: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItemsFromStorage.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExists) {
        return {
          ...state,
          cartItemsFromStorage: state.cartItemsFromStorage.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItemsFromStorage: [...state.cartItemsFromStorage, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItemsFromStorage: state.cartItemsFromStorage.filter(
          (item) => item._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
