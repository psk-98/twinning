import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css"
import Loader from "../layout/loader"
import { motion } from "framer-motion"

export default function Slider({ header, products, loading, error }) {
  const [isEmpty, setEmpty] = useState(true)

  useEffect(() => {
    if (products && products.length === 0) setEmpty(true)
    else setEmpty(false)
  }, [products])
  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : isEmpty ? (
    <></>
  ) : (
    <div className={styles.productSlider}>
      <div className={`${styles.sliderHeader} header`}>{header}</div>
      <div className={styles.slider}>
        {products?.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className={styles.sliderCard}
            >
              <motion.div whileHover={{ opacity: 0.7 }}>
                <div className={styles.sliderImg}>
                  <Image
                    src={product.product_images[0].get_image}
                    width="800"
                    height="800"
                    alt={product.name}
                  />
                </div>
                <div className={styles.sliderName}>{product.name}</div>
                <Link href={`/products/${product.category}`}>
                  <div className={`nav-text lighter`}>{product.category}</div>
                </Link>
                <div className={`nav-text`}>
                  R {Math.round(product.price * 100) / 100}
                </div>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
