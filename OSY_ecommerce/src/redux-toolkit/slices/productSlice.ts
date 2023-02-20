import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsReducer = productSlice.reducer;
