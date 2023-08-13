import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

console.log(cartSlice);

export default cartSlice.reducer;

// BUT I WONT USE REDUX CUZ THIS WEBSITE DATA ISNT THAT COMPLICATED... WILL JUST USE CONTEXT API, enough.
