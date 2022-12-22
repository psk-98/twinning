import styles from "../../styles/Home.module.css"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <>
      <div
        className={styles.landing}
        style={{ backgroundImage: `url(hero.webp)` }}
      >
        <Link href="/products/all">
          <motion.div
            className={`${styles.shopBtn} btn`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop all
          </motion.div>
        </Link>
      </div>
      <div className={`${styles.about}`}>
        Twinning ZA by MK is beachwear and accessory clothing brand, offering
        our customer trendy, stylish beachwear for men, women and kids.Finding
        perfect matching beachwear for your family trip, girls trips, beacation
        has just been made easy with our wide selection of styles and inclusive
        size range (XS - 4XL) women.
      </div>
    </>
  )
}
