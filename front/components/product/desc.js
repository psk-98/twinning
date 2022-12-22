import styles from "../../styles/Product.module.css"
import { motion } from "framer-motion"
import { filterOptionsVariants } from "../../animations/filterbar"
import { updateDesc } from "../../reducers/products"
import { useDispatch } from "react-redux"
import { headerVariants } from "../../animations/product"

export default function Desc({ product, selected }) {
  const dispatch = useDispatch()

  const setActive = (sizes, size) => {
    if (sizes.includes(size)) return true
    else return false
  }

  return (
    <div className={styles.productDesc}>
      <div className={styles.descHeaders}>
        <motion.div
          className="nav-text"
          initial={false}
          animate={setActive(selected, "desc") ? "active" : "not"}
          variants={headerVariants}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(updateDesc("desc"))}
        >
          description
        </motion.div>
        <motion.div
          className={`${styles.mid} nav-text`}
          initial={false}
          animate={setActive(selected, "size") ? "active" : "not"}
          variants={headerVariants}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(updateDesc("size"))}
        >
          size guide
        </motion.div>
        <motion.div
          className="nav-text"
          initial={false}
          animate={setActive(selected, "shipping") ? "active" : "not"}
          variants={headerVariants}
          whileTap={{ scale: 0.95 }}
          onClick={() => dispatch(updateDesc("shipping"))}
        >
          shipping
        </motion.div>
      </div>
      <div className={styles.descTexts}>
        <motion.div
          className={styles.descText}
          animate={setActive(selected, "desc") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          {product?.description}
        </motion.div>
        <motion.div
          className={styles.descText}
          animate={setActive(selected, "size") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          sizes this Aenean gravida turpis nisi, consequat dictum risus dapibus
          a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas
          ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae
          justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
          consequat tellus id tempus aliquet.
        </motion.div>
        <motion.div
          className={styles.descText}
          initial={false}
          animate={setActive(selected, "shipping") ? "open" : "closed"}
          variants={filterOptionsVariants}
        >
          Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis
          felis ante, varius in neque eu, tempor suscipit sem. Maecenas
          ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae
          justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris
          consequat tellus id tempus aliquet.
        </motion.div>
      </div>
    </div>
  )
}
