import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { selectorVariants } from "../../animations/product"
import { updateSizes } from "../../reducers/products"
//import { updateSizes } from "../../../../footprints-next/reducers/products"
import styles from "../../styles/Product.module.css"

export default function Sizes() {
  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const { selectedSizes, product } = state.products

  const setActive = (sizes, size) => {
    if (sizes.includes(size)) return true
    else return false
  }

  return (
    <div className={styles.productSizes}>
      {product?.product_stock ? (
        product?.product_stock?.map((stock) => {
          return (
            <motion.div
              className={styles.sizeOption}
              key={stock?.id}
              initial={false}
              animate={setActive(selectedSizes, stock.size) ? "not" : "active"}
              variants={selectorVariants}
              onClick={() => dispatch(updateSizes(stock.size))}
            >
              {stock?.size}
            </motion.div>
          )
        })
      ) : (
        <>
          <div className={`${styles.sizeOption} ${styles.active}`}>
            no stock
          </div>
        </>
      )}
    </div>
  )
}
