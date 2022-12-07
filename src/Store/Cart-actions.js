import { CartActions } from "./Cart-Slice";

export const fetchCartData = () => {
    return async(dispatch)=>{
        const getData = async() => {
            const response = await fetch('https://redux-6642d-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error("Error, fetching failed");
              }

            const data = response.json();
            return data;
        }

        try{
            let myData = await getData();
            console.log(myData);
            dispatch(CartActions.replaceCart(myData));
        }catch(err){
            console.log(err);
        }
    }
}

export const CrudCartItems = (CartItems) => {
    return async() => {
        const sendCartData = async()=>{
            let response = await fetch('https://redux-6642d-default-rtdb.firebaseio.com/cart.json',{
              method:'PUT',
              body:JSON.stringify(CartItems)
            });
             if(!response.ok){
                throw new Error("Error, failed");
              }
          }
        try{
            await sendCartData();
        }catch(err){
           console.log(err);
        }
    }
}