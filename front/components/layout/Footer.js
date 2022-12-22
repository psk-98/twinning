import footerStyles from "../../styles/Footer.module.css"
import { motion } from "framer-motion"
import Link from "next/link"

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={footerStyles.footer}>
      <Link
        href="https://www.instagram.com/twinning_za_by_mk/"
        target="_blank"
        rel="noreferrer"
      >
        <motion.div
          className={`${footerStyles.followUs} btn`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          follow us
        </motion.div>
      </Link>
      <div className={footerStyles.footerLinks}>
        <Link href="/product/search">
          <motion.div
            className={footerStyles.footerLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.div>
        </Link>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          FAQ
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Shipping
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Returns
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Terms of use
        </motion.div>
        <motion.div
          className={footerStyles.footerLink}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Privacy policy
        </motion.div>
      </div>
      <div className={footerStyles.footerBottom}>
        &copy; {new Date().getFullYear()} Designed and built by
        <motion.a
          href="https://paulkhoza.netlify.app"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.95 }}
        >
          Paul Khoza
        </motion.a>
      </div>
    </div>
  )
}

export default Footer
