import { createSlice } from '@reduxjs/toolkit';
import { data, employee } from '../static/data';

const initialStateValue: employee[] = data;

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: { value: initialStateValue },
  reducers: {
    addEmployee: (state, action) => {
      state.value.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
     state.value= state.value.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
      });
    },
  },
});

export const { addEmployee, deleteEmployee,updateUser } = employeeSlice.actions;

export default employeeSlice.reducer;
