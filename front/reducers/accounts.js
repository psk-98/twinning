import { createSlice } from "@reduxjs/toolkit"
import { login } from "../actions/accounts"

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    //token: localStorage.getItem("token"),
    //isAuthenticated: false,
  },
  reducers: {
    updateUser: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
  extraReducers: (buidler) => {
    buidler.addCase(login.pending, (state, action) => {
      state.loading = true
    })
    buidler.addCase(login.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false
      state.user = action.payload.res.data.user
      state.isAuthenticated = true
    })
    buidler.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      state.user = null
      state.error = "Invalid creditionals"
    })
  },
})
