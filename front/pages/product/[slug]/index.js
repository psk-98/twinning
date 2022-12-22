import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, getProducts } from "../../../actions/products"
import { motion } from "framer-motion"
import Slider from "../../../components/common/productsSlider"
import Loader from "../../../components/layout/loader"
import Desc from "../../../components/product/desc"
import Images from "../../../components/product/productImgs"
import Sizes from "../../../components/product/productSizes"
import styles from "../../../styles/Product.module.css"
import { containerVariants } from "../../../animations/routes"
import { updateSlug } from "../../../reducers/params"
import { addToCart } from "../../../reducers/cart"
import Link from "next/link"

export default function Product() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const router = useRouter()

  const { slug } = router.query
  const { loading, error, product, selectedDesc, products, selectedSizes } =
    state.products

  useEffect(() => {
    dispatch(getProduct(slug))
    dispatch(updateSlug(slug))
    dispatch(getProducts("like"))
  }, [slug])

  return (
    <motion.div
      key={loading}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error-msg">{error?.message}!</div>
      ) : (
        <>
          <div className="contained">
            <Images product={product} />
            <div className={styles.details}>
              <div className={styles.name}>{product?.name}</div>
              <Link href={`/products/${product?.category}`}>
                <div className={`nav-text lighter`}>{product?.category}</div>
              </Link>
              <div className={`nav-text`}>
                <span className={styles.priceCurrency}>R</span>
                <span className={styles.price}>{product?.price}</span>
              </div>
            </div>
            <Sizes />
            <div
              className={`${styles.addCart} btn`}
              onClick={() => {
                if (selectedSizes.length > 0)
                  dispatch(addToCart({ product, size: selectedSizes[0] }))
              }}
            >
              Add to bag
            </div>
            <Desc selected={selectedDesc} product={product} />
          </div>
          <Slider
            header="You May Also Like"
            products={products}
            loading={loading}
          />
        </>
      )}
    </motion.div>
  )
}
