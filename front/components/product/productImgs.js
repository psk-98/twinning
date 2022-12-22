import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { imgVariants, selectorVariants } from "../../animations/product"
import { containerVariants } from "../../animations/routes"
import styles from "../../styles/Product.module.css"
import { isActive } from "./helper"

export default function Images({ product }) {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <>
      <div className={styles.imgsWrapper}>
        <div className={styles.imgSm}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={currentImg}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Image
                src={product?.product_images[currentImg].get_image}
                alt={currentImg}
                width="800"
                height="800"
              />
            </motion.div>
          </AnimatePresence>
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
