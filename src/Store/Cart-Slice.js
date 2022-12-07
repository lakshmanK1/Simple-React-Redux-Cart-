import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        Cart:[],
        totalQuantity:0
    },
    reducers:{
        replaceCart : (state, action)=>{
            state.totalQuantity = action.payload.totalQuantity;
            state.Cart = action.payload.Cart;
        },
        
        addToCart : (state, action)=>{
            const newData = action.payload;
            const existingData = state.Cart.find((items) => items.id === newData.id);
            state.totalQuantity++;
            if(!existingData){
                state.Cart.push({
                    id:newData.id,
                    price:newData.price,
                    quantity:1,
                    totalPrice:newData.price,
                    title:newData.title
                })
                console.log(state.Cart);
            }else {
                existingData.quantity++;
                existingData.totalPrice=existingData.totalPrice + newData.price;
            }
        },

        removeFromCart : (state, action) => {
            const id = action.payload;
            const existingData = state.Cart.find((item) => item.id === id);
            state.totalQuantity--;
            if(existingData.quantity === 1){
                state.Cart = state.Cart.filter((item) => item.id !== id);
            }else{
                existingData.quantity--;
            }
        }
    }
});



export const CartActions = cartSlice.actions;
export default cartSlice.reducer;