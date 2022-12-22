import { motion } from "framer-motion"
import { filterOptionsVariants } from "../../animations/filterbar"

export const setActive = (sort, sortElement) => {
  if (sort === sortElement) return true
  else return false
}

export const downArrow = (status) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="12"
      fill="none"
      viewBox="0 0 21 12"
      intitial={false}
      animate={status ? "closed" : "open"}
      variants={filterOptionsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="12"
        fill="none"
        viewBox="0 0 21 12"
      >
        <path stroke="#000" d="M20.454 1.254L10.554 11.153"></path>
        <path stroke="#000" d="M11.146 11.254L1.247 1.354"></path>
      </svg>
    </motion.svg>
  )
}
export const upArrow = (status) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="11"
      fill="none"
      viewBox="0 0 21 11"
      initial={false}
      animate={status ? "open" : "closed"}
      variants={filterOptionsVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <path stroke="#000" d="M1.247 10.546L11.146 0.647"></path>
      <path stroke="#000" d="M10.554 0.546L20.454 10.446"></path>
    </motion.svg>
  )
}
