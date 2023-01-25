import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartContainer from './components/CartContainer/CartContainer';
import Navbar from './components/Navbar/Navbar';
import { calculateTotal, getCartItems } from './feature/cart/cart';
import { RootState } from './store';
import './style.css';

export default function App() {
  const { cartItems, isLoading } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  React.useEffect(() => {
    dispatch(getCartItems() as any);
  }, []);

  if (isLoading) {
    return <h5>Loading...</h5>;
  }

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}
