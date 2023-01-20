import * as React from 'react';
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>RTK</div>
      <div>
        <ShoppingCartIcon />
      </div>
      {/* <div>{amount}</div> */}
    </nav>
  );
};
export default Navbar;
