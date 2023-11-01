import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action: PayloadAction) => {
      return state.filter((product) => product !== action.payload);
    },
  },
});
