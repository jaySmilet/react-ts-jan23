import * as React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../feature/cart/cart';
import { Cart } from '../../static/cartOrigin';
import './CartItem.css';

const CartItem = ({ id, title, price, img, amount }: Cart) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      {title}-{price}-{amount}
      <button onClick={() => dispatch(increment({ id }))}>++</button>
      <button>--</button>
    </div>
  );
};
export default CartItem;
