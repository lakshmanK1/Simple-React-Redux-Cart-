import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { UiActions } from '../../Store/Ui-Slice';

import { useDispatch, useSelector } from 'react-redux';

const Cart = (props) => {
  const dispatch = useDispatch();
  const CartItems = useSelector(state => state.Cart.Cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CartItems.map((prod)=>(
           <CartItem
           key={prod.id}
           item={{id:prod.id, title: prod.title, quantity: prod.quantity, total: prod.totalPrice, price:prod.price}}
         />
        ))}
      </ul>
      <button onClick={()=>{dispatch(UiActions.closeCart())}}>Close</button>
    </Card>
  );
};

export default Cart;
