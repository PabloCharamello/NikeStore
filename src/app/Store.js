import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default Store;
