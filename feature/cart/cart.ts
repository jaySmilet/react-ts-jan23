import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../static/cartOrigin';

const initialStateValue = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateValue,
  reducers: {
    increment: (state, action) => {
      state.cartItems = state.cartItems.map((cart) => {
        if (cart.id === action.payload.id) {
          return action.payload;
        }
        return cart;
      });
    },
  },
});

export const { increment } = cartSlice.actions;

export default cartSlice.reducer;
