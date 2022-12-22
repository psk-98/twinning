export const handleTotalPrice = (cart) => {
  let totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price * cart[i].quantity
  }

  return totalPrice
}

export const isEmpty = (cart) => {
  if (!cart || cart.length === 0) return true
  return false
}
