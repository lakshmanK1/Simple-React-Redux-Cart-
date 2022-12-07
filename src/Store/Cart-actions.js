import { CartActions } from "./Cart-Slice";
import { UiActions } from "./Ui-Slice";
import { useDispatch } from "react-redux";


export const fetchCartData = () => {
    return async(dispatch)=>{
        const getData = async() => {
            const response = await fetch('https://redux-6642d-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error("Error, fetching failed");
              }

            const data = response.json();
            dispatch(UiActions.showNotification({
                status:'Success',
                title:'Fetch request worked!',
                message:'Successfully fetched data...'
            }))
            return data;
        }

        try{
            let myData = await getData();
            console.log(myData);
            dispatch(CartActions.replaceCart(myData));
        }catch(err){
            console.log(err);
            dispatch(UiActions.showNotification({
                status:'Failed',
                title:'Fetch data failed',
                message:'something wrong went...'
            }))
        }
    }
}

export const CrudCartItems = (CartItems) => {
    return async(dispatch) => {
        const sendCartData = async()=>{
            let response = await fetch('https://redux-6642d-default-rtdb.firebaseio.com/cart.json',{
              method:'PUT',
              body:JSON.stringify(CartItems)
            });
             if(!response.ok){
                throw new Error("Error, failed");
              }

              dispatch(UiActions.showNotification({
                status:'Success',
                title:'PUT request worked!',
                message:'Successfully transfered data...'
            }))
          }
        try{
            await sendCartData();
        }catch(err){
           console.log(err);
           dispatch(UiActions.showNotification({
            status:'error',
            title:'Failed!',
            message:'Something wrong went..'
        }))
        }
    }
}