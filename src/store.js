import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";

export const store = configureStore({
    reducer:{
        // Add the reducer here
        cart:cartReducer
    }
})