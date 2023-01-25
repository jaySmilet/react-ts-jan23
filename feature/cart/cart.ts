import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartItems } from '../../static/cartOrigin';

const url = `https://course-api.com/react-useReducer-cart-project`;

const initialStateValue = {
  cartItems: cartItems,
  amount: 8,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

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
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      }),
      builder.addCase(getCartItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { increment, decrement, clearCart, removeItem, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
