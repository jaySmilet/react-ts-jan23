import * as React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../../feature/cart/cart';
import { Cart } from '../../static/cartOrigin';
import './CartItem.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = ({ id, title, price, img, amount }: Cart) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="img-item">
        <img src={img} alt="title" />
      </div>
      <div>
        <span>{title}</span> <br />
        <span>${price}</span>
      </div>
      <div className="plus-minus">
        {amount < 5 && (
          <button onClick={() => dispatch(increment({ id }))}>
            <AddIcon />
          </button>
        )}
        <div>{amount}</div>
        {amount > 1 && (
          <button onClick={() => dispatch(decrement({ id }))}>
            <RemoveIcon />
          </button>
        )}
      </div>
      <div className="delete-btn">
        <button onClick={() => dispatch(removeItem({ id }))}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
