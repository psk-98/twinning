import Nav from "../nav/Nav"
import Footer from "./Footer"
// import Footer from "./Footer"
import { AnimatePresence, motion } from "framer-motion"
import { containerVariants } from "../../animations/routes"
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <AnimatePresence>
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          variants={containerVariants}
          className="container"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}
export default Layout
