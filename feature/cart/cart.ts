import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  cartItems: [],
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
