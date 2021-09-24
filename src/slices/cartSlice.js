import { createSlice } from "@reduxjs/toolkit";
import groupBy from 'lodash/groupBy';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Actions
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
      const index = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);
      
      if(index >= 0) {
        state.items.splice(index+1, 0, action.payload);
        state.items.pop();
      };

      
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);
      let newCart = [...state.items];

      if (index >= 0) {
        // The item exists in the cart -> remove it
        newCart.splice(index, 1);
      } else {
        console.warn(`Can not remove product (id: ${action.payload.id}) because it is not in the basket`);
      }

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price , 0);

export default cartSlice.reducer;
