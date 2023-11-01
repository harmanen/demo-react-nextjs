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
        total: state.total + action.payload.amount,
      };
    },
    removeProduct: (state, action: PayloadAction) => {
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (product) => product !== action.payload.products,
        ),
        total: state.total - action.payload.amount,
      };
    },
  },
});
