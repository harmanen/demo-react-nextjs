import { customerSlice, productSlice } from "./slices";

export const reducer = {
  customer: customerSlice.reducer,
  products: productSlice.reducer,
};
