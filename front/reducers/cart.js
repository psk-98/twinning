import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    numberCart: 0,
    cart: [],
  },
  reducers: {
    deleteCartItem: (state, action) => {
      let quantity_ = state.cart[action.payload].quantity
      state.numberCart = state.numberCart - quantity_
      state.cart = state.cart.filter((item) => {
        return (
          item.id !== state.cart[action.payload].id ||
          item.size !== state.cart[action.payload].size
        )
      })
    },
    decreaseQuantity: (state, action) => {
      let quantity = state.cart[action.payload].quantity
      if (quantity > 1) {
        state.numberCart--
        state.cart[action.payload].quantity--
      }
    },
    increaseQuantity: (state, action) => {
      state.numberCart++
      state.cart[action.payload].quantity++
    },
    addToCart: (state, action) => {
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.product.id,
          name: action.payload.product.name,
          image: action.payload.product.product_images[0].get_image,
          price: action.payload.product.price,
          quantity: 1,
          size: action.payload.size,
          product: action.payload.product.id,
        }
        state.cart.push(cart)
        state.numberCart++
      } else {
        let check = false
        state.cart.map((item, key) => {
          if (
            item.id === action.payload.product.id &&
            item.size === action.payload.size
          ) {
            state.cart[key].quantity++
            check = true
            state.numberCart++
          }
        })
        if (!check) {
          let _cart = {
            id: action.payload.product.id,
            quantity: 1,
            name: action.payload.product.name,
            image: action.payload.product.product_images[0].get_image,
            price: action.payload.product.price,
            size: action.payload.size,
            product: action.payload.product.id,
          }
          state.cart.push(_cart)
          state.numberCart++
        }
      }
    },
  },
})

export const { addToCart, decreaseQuantity, deleteCartItem, increaseQuantity } =
  cartSlice.actions
