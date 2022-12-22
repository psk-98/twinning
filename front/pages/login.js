import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/accounts"
import { motion } from "framer-motion"
import styles from "../styles/Auth.module.css"
import { containerVariants } from "../animations/routes"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const router = useRouter()
  const { accounts } = state
  useEffect(() => {
    if (accounts?.isAuthenticated) router.push("/")
  }, [accounts.isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      dispatch(login({ username: email, password }))
    } else {
      console.log("empty")
    }
  }

  return (
    <div className={styles.theForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.subBtn}>
          Login
        </button>
      </form>
      <div>
        Dont have an account?
        <Link className={styles.formRedirect} href="/register">
          register
        </Link>
      </div>
    </div>
  )
}
