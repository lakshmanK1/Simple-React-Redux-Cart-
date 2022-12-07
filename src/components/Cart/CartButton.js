import classes from './CartButton.module.css';
import {  useSelector} from 'react-redux';


const CartButton = (props) => {

  const cartQuantity = useSelector(state => state.Cart.totalQuantity);
  

  return (
    <button className={classes.button} onClick={props.displayCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
