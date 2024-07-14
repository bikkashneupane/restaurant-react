import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

// configure store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
