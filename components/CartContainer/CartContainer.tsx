import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from '../CartItem/CartItem';
import './CartContainer.css';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(
    (state: RootState) => state.cart
  );
  if (amount < 1) {
    return (
      <div className="cart-conatiner">
        <div className="empty-cart">Your bag is empty!</div>{' '}
      </div>
    );
  } else {
    return (
      <div className="cart-conatiner">
        {cartItems.map((cart) => (
          <CartItem key={cart.id} {...cart} />
        ))}
        <div>total-: {total}</div>
        <button>clr cart</button>
      </div>
    );
  }
};
export default CartContainer;
