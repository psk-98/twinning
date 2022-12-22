import { motion } from "framer-motion"
import Link from "next/link"
import {
  navLinkVariants,
  sidebarVariants,
  ulVariants,
} from "../../animations/nav"
import styles from "../../styles/Nav.module.css"

export default function Sidebar({ handleBurger, toggle }) {
  return (
    <motion.div
      className={styles.sidebar}
      initial={"closed"}
      animate={toggle ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <motion.ul
        className={styles.sideList}
        variants={ulVariants}
        animate={toggle ? "open" : "closed"}
      >
        <Link href="/products/all">
          <motion.li
            className={`${styles.sideItem} btn`}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            Shop all
          </motion.li>
        </Link>
        <Link href="/products/kids">
          <motion.li
            className={`${styles.sideItem} btn`}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            Kids
          </motion.li>
        </Link>
        <Link href="/products/men">
          <motion.li
            className={`${styles.sideItem} btn`}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            Men
          </motion.li>
        </Link>
        <Link href="/products/women">
          <motion.li
            className={`${styles.sideItem} btn`}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            Women
          </motion.li>
        </Link>
        <Link href="/login">
          <motion.li
            className={`${styles.sideItem} btn`}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            Login
          </motion.li>
        </Link>
        <Link href="/contact">
          <motion.li
            className={`${styles.sideItem} btn`}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBurger()}
          >
            Contact
          </motion.li>
        </Link>
      </motion.ul>
    </motion.div>
  )
}
