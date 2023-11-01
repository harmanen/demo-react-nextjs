import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  metadata: {},
  user: undefined,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerData: (state, action: PayloadAction) => {
      state = action.payload;
      return state;
    },
    updateCustomerData: (state, action: PayloadAction) => {
      return { ...state, ...action.payload };
    },
  },
});
