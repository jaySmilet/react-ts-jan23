import { configureStore } from '@reduxjs/toolkit';
import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import userReducer from './feature/user';
import themeReducer from './feature/theme';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
