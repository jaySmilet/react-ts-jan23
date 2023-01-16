import { createSlice } from "@reduxjs/toolkit";
import { data, employee } from "../static/data";

const initialStateValue:employee[] = data;

export const employeeSlice = createSlice({
  name:'employee',
  initialState:{value:initialStateValue},
  reducers:{
    addEmployee:(state,action)=>{
      state.value.push(action.payload)
    }
  }
});

export const {addEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;
