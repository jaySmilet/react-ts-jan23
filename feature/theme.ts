import { createSlice } from '@reduxjs/toolkit';
import { color } from '../components/ChangeColor/ChangeColor';

const initialStateValue: color = { name: 'dark', id: 1 };

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
