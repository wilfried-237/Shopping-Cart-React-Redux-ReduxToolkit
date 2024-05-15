//import createslice
//initialize intial state
//slice ->name, mention initial state and actions
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            state.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;