import navStyles from "../../styles/Nav.module.css"
import { motion, useAnimation, useScroll } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navVariants,
} from "../../animations/nav"
import { useEffect, useState } from "react"
import { CartIcon, handleBurger, SearchIcon } from "./helpers"
import Link from "next/link"
import Search from "./search"

export default function Nav() {
  const [toggle, setToggle] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const { scrollYProgress } = useScroll()

  const [show, setShow] = useState(scrollYProgress)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
        navControls.start(navVariants.transparent)
      } else {
        // if scroll up show the navbar
        setShow(true)
        navControls.start(navVariants.none)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])
  const navControls = useAnimation()
  const line1Controls = useAnimation()
  const line2Controls = useAnimation()
  const line3Controls = useAnimation()

  return (
    <>
      <motion.div
        className={navStyles.navTop}
        variants={navVariants}
        animate={navControls}
      >
        {isSearch ? (
          <Search setIsSearch={setIsSearch} />
        ) : (
          <>
            <motion.div
              className={navStyles.burger}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                handleBurger(
                  line1Controls,
                  line2Controls,
                  line3Controls,
                  toggle,
                  setToggle
                )
              }
            >
              <motion.div
                className={navStyles.line}
                variants={line1Variants}
                animate={line1Controls}
              ></motion.div>
              <motion.div
                className={navStyles.line2}
                variants={line2Variants}
                animate={line2Controls}
              ></motion.div>
              <motion.div
                className={navStyles.line3}
                variants={line3Variants}
                animate={line3Controls}
              ></motion.div>
            </motion.div>
            <Link href="/">
              <div className={navStyles.logo}>Twinning ZA</div>
            </Link>
            <div className={navStyles.topNavList}>
              <motion.div
                className={navStyles.navItem}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearch(!isSearch)}
              >
                <SearchIcon />
              </motion.div>
              <Link href="/cart">
                <motion.div
                  className={navStyles.navItem}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CartIcon />
                </motion.div>
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </>
  )
}
