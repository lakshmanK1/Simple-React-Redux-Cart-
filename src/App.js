import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { UiActions } from './Store/Ui-Slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {CrudCartItems, fetchCartData} from './Store/Cart-actions'

let isInitial = true;
function App() {

  const dispatch = useDispatch();

  const isCart = useSelector(state=>state.Ui.CartState);

  const CartItems = useSelector(state => state.Cart);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);

  useEffect(()=>{

    if(isInitial){
      isInitial = false;
      return;
    }
    dispatch(CrudCartItems(CartItems));
    
  },[CartItems, dispatch]);

  return (
    <Layout showCart={()=>{dispatch(UiActions.openCart())}}>
    {isCart &&  <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
