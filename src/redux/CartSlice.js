import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //create all actions here...
        addToCart:(state,action)=>{
            console.log("action",action)
            console.log("state...",state)
            state.products.push(action.payload)
        }
    }

})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer