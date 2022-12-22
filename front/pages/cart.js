import Link from "next/link"
import { useState } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import CartList from "../components/cart/cartList"
import styles from "../styles/Cart.module.css"
import { handleTotalPrice, isEmpty } from "../components/cart/helpers"

export default function Cart() {
  const [showModal, setShowModal] = useState(true)
  const state = useSelector((state) => state)
  const { numberCart, cart } = state.cart

  return showModal ? (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="21"
            viewBox="0 0 48 48"
            onClick={() => setShowModal(false)}
          >
            <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
          </svg>
        </button>
        <Link href="/login">
          <div className={styles.authBtn}>Login</div>
        </Link>
        <Link href="/checkout">
          <div className={styles.guestBtn}>Guest checkout</div>
        </Link>
      </div>
    </div>
  ) : (
    <div className={`${styles.cartWrapper} contained`}>
      <div className={styles.cartTop}>
        <div className={`${styles.cartHeader} header`}>Bag</div>
        <div className={styles.cartDetails}>
          <div className="lighter">{numberCart} items</div>
          <span>|</span>
          <div className={styles.cartTotal}>
            R {handleTotalPrice(cart).toFixed(2)}
          </div>
        </div>
      </div>
      <div className={styles.cartItemsWrapper}>
        <CartList cart={cart} />
      </div>
      {isEmpty(cart) ? (
        <>
          <div className={styles.emptyMsg}>
            <div className="header">Your bag is empty shop around...</div>
            <Link class="btn" href="products/women">
              Women
            </Link>
            <Link class="btn" href="products/men">
              Men
            </Link>
            <Link class="btn" href="products/kids">
              Kids
            </Link>
          </div>
        </>
      ) : (
        <div
          className={`${styles.checkoutBtn} btn`}
          onClick={() => {
            state.accounts?.isAuthenticated
              ? setShowModal(false)
              : setShowModal(true)
          }}
        >
          Checkout
        </div>
      )}
    </div>
  )
}
