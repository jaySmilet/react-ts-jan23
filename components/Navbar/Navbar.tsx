import * as React from 'react';
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Navbar = () => {
  const { amount } = useSelector((state: RootState) => state.cart);
  return (
    <nav className="navbar">
      <div className="logo">RTK</div>
      <div className="icon">
        <ShoppingCartIcon />
      <div className="amount">{amount}</div>
      </div>
    </nav>
  );
};
export default Navbar;
