import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "../redux/features/cartItemSlice";

export default configureStore({
  reducer: {
    cartItem: cartItemReducer,
  },
});
