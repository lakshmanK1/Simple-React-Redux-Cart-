import {createSlice} from '@reduxjs/toolkit'

const initialCartState = {CartState:false}

const uiSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        openCart : (state)=>{
            state.CartState = true;
        },

        closeCart : (state)=>{
            state.CartState = false;
        } 
    }
});


export const UiActions = uiSlice.actions;

export default uiSlice.reducer;