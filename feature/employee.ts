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
      state.value = state.value.filter((emp) => emp.id !== action.payload.id);
    },
    updateEmployee: (state, action) => {
      state.value = state.value.map((emp) => {
        if (emp.id === action.payload.id) {
          return action.payload;
        }
      });
    },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
