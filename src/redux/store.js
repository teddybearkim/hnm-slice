
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";


const store = configureStore({
  reducer: {
    auth : authenticateReducer,
    product : productSlice,
  }
})


export default store;