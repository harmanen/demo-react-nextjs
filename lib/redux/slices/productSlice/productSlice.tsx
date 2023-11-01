import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: [],
  total: 0,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction) => {
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload.product],
        total: Math.round((state.total + action.payload.amount) * 100) / 100, // 2 decimals
      };
    },
    removeProduct: (state, action: PayloadAction) => {
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (product) => product !== action.payload.product,
        ),
        total: Math.round((state.total - action.payload.amount) * 100) / 100, // 2 decimals
      };
    },
  },
});
