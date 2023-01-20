import { configureStore } from '@reduxjs/toolkit';
import cart from './feature/cart/cart';

export const store = configureStore({
  reducer: {
    cart: cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;