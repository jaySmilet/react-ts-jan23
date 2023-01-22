import { createSlice } from '@reduxjs/toolkit';
import { cartItems } from '../../static/cartOrigin';

const initialStateValue = {
  cartItems: cartItems,
  amount: 8,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateValue,
  reducers: {
    increment: (state, action) => {
      state.cartItems = state.cartItems.map((cart) => {
        if (cart.id === action.payload.id && cart.amount !== 5) {
          cart.amount++;
        }
        return cart;
      });
    },
    decrement: (state, action) => {
      state.cartItems = state.cartItems.map((cart) => {
        if (cart.id === action.payload.id && cart.amount !== 1) {
          cart.amount--;
        }
        return cart;
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload.id
      );
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increment, decrement, clearCart, removeItem,calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
