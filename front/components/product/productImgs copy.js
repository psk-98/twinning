import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { imgVariants, selectorVariants } from "../../animations/product"
import styles from "../../styles/Product.module.css"
import { isActive } from "./helper"

export default function Images({ product }) {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <>
      <div className={styles.imgsWrapper}>
        <div className={styles.imgSm}>
          {product?.product_images.map((image, index) => {
            return (
              <motion.div
                key={index}
                initial={false}
                animate={isActive(index, currentImg) ? "appear" : "dis"}
                variants={imgVariants}
              >
                <Image
                  src={image.get_image}
                  alt={currentImg}
                  width="800"
                  height="800"
                />
              </motion.div>
            )
          })}
          <div className={styles.selectorWrapper}>
            {product?.product_images.map((selector, index) => {
              return (
                <motion.div
                  className={styles.imgSelector}
                  key={index}
                  initial={false}
                  animate={isActive(index, currentImg) ? "active" : "not"}
                  variants={selectorVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentImg(index)}
                ></motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
