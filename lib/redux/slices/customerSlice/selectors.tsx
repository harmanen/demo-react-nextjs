import type { ReduxState } from "@/lib/redux";

export const selectCustomer = (state: ReduxState) => state.customer;
