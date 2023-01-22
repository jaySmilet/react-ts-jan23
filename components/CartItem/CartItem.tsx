import * as React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../feature/cart/cart';
import { Cart } from '../../static/cartOrigin';
import './CartItem.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartItem = ({ id, title, price, img, amount }: Cart) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="img-item">
        <img src={img} alt="title" />
      </div>
      <div>
        <span>{title}</span> <span>${price}</span>
      </div>
      <div className="plus-minus">
        <button onClick={() => dispatch(increment({ id }))}>
          <KeyboardArrowUpIcon />
        </button>
        <div>{amount}</div>
        <button onClick={() => dispatch(decrement({ id }))}>
          <KeyboardArrowDownIcon />
        </button>
      </div>
      <div className="delete-btn">
        <button>
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
