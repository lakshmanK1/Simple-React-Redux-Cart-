import {createSlice} from '@reduxjs/toolkit'

const initialCartState = {CartState:false, notification:null}

const uiSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        openCart : (state)=>{
            state.CartState = true;
        },

        closeCart : (state)=>{
            state.CartState = false;
        } ,

        showNotification : (state, action) => {
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }
    }
});


export const UiActions = uiSlice.actions;

export default uiSlice.reducer;