import { useDispatch, useSelector } from "react-redux"
import { getNewPage } from "../../actions/products"
import styles from "../../styles/Products.module.css"

export default function Paginator() {
  const state = useSelector((state) => state)
  const { prevPage, nextPage } = state.products
  const dispatch = useDispatch()
  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.paginationNav}>
        <ul className={styles.paginationList}>
          <li
            className={
              prevPage
                ? `${styles.paginationLink} ${styles.active}`
                : styles.paginationLink
            }
            onClick={() => {
              dispatch(getNewPage(prevPage))
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="M28.05 35.3 16.7 23.95 28.05 12.6l1.6 1.65-9.7 9.7 9.7 9.75Z" />
            </svg>
          </li>
          <li className={styles.paginationLink}>
            <span></span>
          </li>
          <li
            className={
              nextPage
                ? `${styles.paginationLink} ${styles.active}`
                : styles.paginationLink
            }
            onClick={() => {
              dispatch(getNewPage(nextPage))
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path d="m18.75 35.3-1.6-1.6 9.7-9.75-9.7-9.7 1.6-1.65L30.1 23.95Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  )
}
