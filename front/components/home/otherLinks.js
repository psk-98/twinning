import Image from "next/image"
import styles from "../../styles/Home.module.css"
import { motion } from "framer-motion"
import Link from "next/link"
export default function OtherLinks() {
  return (
    <>
      <Link href="products/women">
        <div className={`${styles.linkWrapper} btn`}>
          <Image src={`/hero.webp`} width={800} height={800} alt="men" />
          <div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.linkBtn} btn`}
          >
            Women
          </div>
        </div>
      </Link>
      <Link href="products/kids">
        <div className={`${styles.linkWrapper} btn`}>
          <Image src={`/hero.webp`} width={800} height={800} alt="men" />
          <div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.linkBtn} btn`}
          >
            Kids
          </div>
        </div>
      </Link>
      <Link href="products/men">
        <div className={`${styles.linkWrapper} btn`}>
          <Image src={`/hero.webp`} width={800} height={800} alt="men" />
          <div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${styles.linkBtn} btn`}
          >
            Men
          </div>
        </div>
      </Link>
    </>
  )
}
