import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../static/cartOrigin';

const initialStateValue = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateValue,
  reducers: {},
});

export default cartSlice.reducer;
