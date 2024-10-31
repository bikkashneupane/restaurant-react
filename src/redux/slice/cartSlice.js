import { createSlice } from "@reduxjs/toolkit";

// create a slice
const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

const { reducer, actions } = cartSlice;

export const { addItem, removeItem, clearCart } = actions;
export default reducer;
