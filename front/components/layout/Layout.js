import Nav from "../nav/Nav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <>{children}</>
      <Footer />
    </>
  )
}
export default Layout
