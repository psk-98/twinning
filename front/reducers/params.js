import { createSlice } from "@reduxjs/toolkit"

export const paramsSlice = createSlice({
  name: "params",
  initialState: {
    sort: "-date_added",
    pageSize: 4,
    sizes: [3, 8],
    slug: "all",
  },
  reducers: {
    updateSort: (state, action) => {
      state.sort = action?.payload
    },
    updatePriceFrom: (state, action) => {
      state.priceFrom = action?.payload
    },
    updatePriceTo: (state, action) => {
      console.log(action)
      state.priceTo = action?.payload
    },
    updateSlug: (state, action) => {
      state.slug = action.payload
    },
  },
})

export const {
  updateCategory,
  updateSort,
  updatePriceFrom,
  updatePriceTo,
  updateSlug,
} = paramsSlice.actions
