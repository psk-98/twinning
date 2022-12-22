import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../../actions/products"
import { motion } from "framer-motion"
import { updateSlug, updateSort } from "../../../reducers/params"
import { containerVariants } from "../../../animations/routes"
import Loader from "../../../components/layout/loader"
import Paginator from "../../../components/products/paginator"
import ProductCards from "../../../components/products/products"
import styles from "../../../styles/Products.module.css"
import Filterbar from "../../../components/products/filterbar"

export default function Products() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const [panelStatus, setPanel] = useState(false)
  const { loading, error, products, numProducts } = state.products
  const { sort, priceFrom, priceTo } = state.params

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    console.log(router)
    if (slug === "search") {
      console.log("serach")
    } else {
      dispatch(updateSlug(slug))
      dispatch(getProducts())
    }
  }, [slug, sort, priceFrom, priceTo])

  return (
    <motion.div
      key={loading}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Filterbar sort={sort} panelStatus={panelStatus} setPanel={setPanel} />
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error-msg">{error?.message}!</div>
      ) : (
        <motion.div className="contained">
          <div className={`${styles.header} header`}>{slug}</div>
          <div className={styles.settingsWrapper}>
            <div className={styles.sortFilter} onClick={() => setPanel(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-filter"
                stroke="7a7a7a"
                viewBox="0 11 20 20"
              >
                <line
                  x1="16.5"
                  y1="17.5"
                  x2="3.5"
                  y2="17.5"
                  stroke-linecap="round"
                ></line>
                <line
                  x1="16.5"
                  y1="24.5"
                  x2="3.5"
                  y2="24.5"
                  stroke-linecap="round"
                ></line>
                <circle cx="13" cy="24.5" r="2" fill="white"></circle>
                <circle cx="7" cy="17.5" r="2" fill="white"></circle>
              </svg>
              filter & sort
            </div>
            <div className={styles.numShow}>{numProducts} products</div>
          </div>
          <ProductCards products={products} />
          <Paginator />
        </motion.div>
      )}
    </motion.div>
  )
}
