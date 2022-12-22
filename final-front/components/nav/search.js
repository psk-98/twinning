import { SearchIcon } from "./helpers"
import styles from "../../styles/Nav.module.css"
import { updateSearch } from "../../reducers/products"
import { useDispatch } from "react-redux"
import { getProducts } from "../../actions/products"

export default function Search({ setIsSearch }) {
  const disptach = useDispatch()

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        required
        placeholder="What are you looking for?"
        onChange={(e) => {
          disptach(updateSearch(e.target.value))
          disptach(getProducts(true))
        }}
      />
      <button onClick={() => setIsSearch(false)}>{SearchIcon}</button>
    </div>
  )
}
