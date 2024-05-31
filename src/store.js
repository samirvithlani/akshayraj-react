import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import bankReducer from "./redux/BankSclice";

export const store = configureStore({
    reducer:{
        // Add the reducer here
        cart:cartReducer,
        bank:bankReducer
    }
})