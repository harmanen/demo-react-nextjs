import type { ReduxState } from "@/lib/redux";

export const selectProducts = (state: ReduxState) =>
  state.products.selectedProducts;

export const selectTotal = (state: ReduxState) => state.products.total;
