import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: 0
}

const bankSlice =createSlice({
    name: "bank", //action bank/deposit
    initialState,
    reducers:{
        depositAction:(state,action)=>{
            return {...state,amount:state.amount+action.payload}
        }
    }
})

export const {depositAction} = bankSlice.actions
export default bankSlice.reducer