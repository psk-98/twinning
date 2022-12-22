import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../actions/products"
import Slider from "../components/common/productsSlider"
import Hero from "../components/home/hero"
import OtherLinks from "../components/home/otherLinks"
import Loader from "../components/layout/loader"
import { motion } from "framer-motion"
import { containerVariants } from "../animations/routes"
export default function Home() {
  const dispatch = useDispatch()

  const state = useSelector((state) => state)
  const { products, loading, error } = state.products
  console.log(products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : (
    <>
      <Hero />
      <Slider header="Featured" products={products} loading={loading} />
      <OtherLinks />
    </>
  )
}
