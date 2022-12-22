import { combineReducers } from "@reduxjs/toolkit"
import { accountsSlice } from "./accounts"
import { cartSlice } from "./cart"
import { paramsSlice } from "./params"
import { productsSlice } from "./products"

export default combineReducers({
  products: productsSlice.reducer,
  params: paramsSlice.reducer,
  cart: cartSlice.reducer,
  accounts: accountsSlice.reducer,
})
