import { motion } from "framer-motion"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  activeVariants,
  appearVariants,
  filterOptionsVariants,
  panelVariants,
} from "../../animations/filterbar"
import {
  updatePriceFrom,
  updatePriceTo,
  updateSort,
} from "../../reducers/params"
import styles from "../../styles/Filterbar.module.css"
import { downArrow, setActive, upArrow } from "./helpers"

export default function Filterbar({ sort, panelStatus, setPanel }) {
  const [togglePrice, setTogglePrice] = useState(false)
  const [toggleSort, setToggleSort] = useState(false)

  const dispatch = useDispatch()

  return (
    <motion.div
      className={styles.filterPanel}
      initial="open"
      animate={panelStatus ? "open" : "closed"}
      variants={panelVariants}
    >
      <motion.div
        className={styles.filterWrapper}
        initial="dis"
        animate={panelStatus ? "appear" : "dis"}
        variants={appearVariants}
      >
        <div className={styles.panelControls}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="8"
            fill="none"
            viewBox="0 0 23 8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setPanel(false)}
          >
            <path
              fill="#000"
              d="M.643 3.896a.5.5 0 000 .708l3.182 3.182a.5.5 0 10.708-.708L1.704 4.25l2.829-2.828a.5.5 0 10-.708-.708L.643 3.896zm21.365-.146H.997v1h21.011v-1z"
            ></path>
          </motion.svg>
        </div>
        <div className={styles.priceFilter}>
          <div className={styles.expandControl}>
            <div>Price</div>
            <div onClick={() => setTogglePrice(!togglePrice)}>
              {upArrow(togglePrice)} {downArrow(togglePrice)}
            </div>
          </div>
          <motion.div
            className={styles.priceFilterOptions}
            initial={false}
            animate={togglePrice ? "open" : "closed"}
            variants={filterOptionsVariants}
          >
            <input
              type="number"
              name="fromPrice"
              step="0.01"
              min="0"
              placeholder="from"
              onChange={(e) => dispatch(updatePriceFrom(e.target.value))}
            />
            <input
              type="text"
              name="toPrice"
              placeholder="to"
              step="0.01"
              min="0"
              onChange={(e) => dispatch(updatePriceTo(e.target.value))}
            />
          </motion.div>
        </div>
        <div className={styles.sortBy}>
          <div className={styles.expandControl}>
            <div>Sort by</div>
            <div onClick={() => setToggleSort(!toggleSort)}>
              {upArrow(toggleSort)} {downArrow(toggleSort)}
            </div>
          </div>
          <motion.div
            className={styles.sortOptions}
            initial={false}
            animate={toggleSort ? "open" : "closed"}
            variants={filterOptionsVariants}
          >
            <motion.div
              className={styles.sortOption}
              initial={false}
              animate={setActive(sort, "price") ? "active" : "not"}
              variants={activeVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(updateSort("price"))}
            >
              Price,low to high
            </motion.div>
            <motion.div
              className={styles.sortOption}
              initial={false}
              animate={setActive(sort, "-price") ? "active" : "not"}
              variants={activeVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(updateSort("-price"))}
            >
              Price,high to low
            </motion.div>
            <motion.div
              className={styles.sortOption}
              initial={false}
              animate={setActive(sort, "name") ? "active" : "not"}
              variants={activeVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(updateSort("name"))}
            >
              Alphabetically,A-Z
            </motion.div>
            <motion.div
              className={styles.sortOption}
              initial={false}
              animate={setActive(sort, "-name") ? "active" : "not"}
              variants={activeVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(updateSort("-name"))}
            >
              Alphabetically,Z-A
            </motion.div>
            <motion.div
              className={styles.sortOption}
              initial={false}
              animate={setActive(sort, "-date_added") ? "active" : "not"}
              variants={activeVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(updateSort("-date_added"))}
            >
              Newest
            </motion.div>
            <motion.div
              className={styles.sortOption}
              initial={false}
              animate={setActive(sort, "date_added") ? "active" : "not"}
              variants={activeVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(updateSort("date_added"))}
            >
              Oldest
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.panelReset}>
        <p></p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial="dis"
          animate={panelStatus ? "appear" : "dis"}
          variants={appearVariants}
        >
          Reset
        </motion.div>
      </div>
    </motion.div>
  )
}
