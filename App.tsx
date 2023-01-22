import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Navbar/Navbar';
import { calculateTotal } from './feature/cart/cart';
import { RootState } from './store';
import './style.css';

export default function App() {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}
