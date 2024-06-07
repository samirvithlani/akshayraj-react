import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import bankReducer from "./redux/BankSclice";
import contentReducer from "./redux/ContentSlice";

export const store = configureStore({
    reducer:{
        // Add the reducer here
        cart:cartReducer,
        bank:bankReducer,
        content:contentReducer
        
    }
})