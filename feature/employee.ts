import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {id:1,name:'Jaisurya',position:'Engineer'}

export const employeeSlice = createSlice({
  name:'employee',
  initialState:{value:initialStateValue},
  reducers:{
    addEmployee:(state,action)=>{
      state.value = 
    }
  }
})

export default employeeSlice.reducer;
