import { createSlice } from "@reduxjs/toolkit"
import { placeOrder } from "../actions/checkout"

export const checkoutSlice = createSlice({
  name: "products",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.orderSucess = true
      state.loading = false
    })
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.orderSucess = false
      state.loading = false
    })
  },
})
