import { createSlice } from "@reduxjs/toolkit"
import { getNewPage, getProduct, getProducts } from "../actions/products"

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    panelStatus: false,
    loading: true,
    selectedDesc: "desc",
    selectedSizes: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.results
      state.numProducts = action.payload.count
      state.prevPage = action.payload.previous
      state.nextPage = action.payload.next
      state.loading = false
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    updateSearch: (state, action) => {
      state.search = action.payload
    },
    updateSizes: (state, action) => {
      if (state.selectedSizes.includes(action?.payload)) {
        //remove element if already in array
        state.selectedSizes = state.selectedSizes.filter(
          (element) => element !== action?.payload
        )
      } else state.selectedSizes.push(action?.payload)
    },
    updatePanel: (state) => {
      state.panelStatus = !state.panelStatus
    },
    updateDesc: (state, action) => {
      state.selectedDesc = action?.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.res.data.results
      state.numProducts = action.payload.res.data.count
      state.prevPage = action.payload.res.data.previous
      state.nextPage = action.payload.res.data.next
      state.loading = false
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action)
      state.error = action.payload
      state.loading = false
    })
    // new page
    builder.addCase(getNewPage.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getNewPage.fulfilled, (state, action) => {
      state.products = action.payload.res.data.results
      state.numProducts = action.payload.res.data.count
      state.prevPage = action.payload.res.data.previous
      state.nextPage = action.payload.res.data.next
      state.loading = false
    })
    builder.addCase(getNewPage.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action?.payload.res.data
      state.loading = false
    })
    builder.addCase(getProduct.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export const {
  updatePanel,
  updateDesc,
  updateSizes,
  setProducts,
  setProduct,
  updateSearch,
} = productsSlice.actions
