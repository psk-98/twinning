import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions/accounts"
import { motion } from "framer-motion"
import styles from "../styles/Auth.module.css"
import { containerVariants } from "../animations/routes"

export default function Register() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const router = useRouter()
  const { accounts } = state

  useEffect(() => {
    if (accounts?.isAuthenticated) router.push("/")
  }, [accounts.isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === password2) {
      dispatch(register({ name, surname, email, password }))
    } else {
      console.log("passwords dont match")
    }
  }

  return (
    <div className={styles.theForm}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          {" "}
          <div className="form-group">
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
        </div>
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
        <div className={styles.formGroup}>
          <input
            type="password"
            name="password"
            placeholder="Password Just Once More"
            required
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.subBtn}>
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <Link className={styles.formRedirect} href="/login">
          Login
        </Link>
      </div>
    </div>
  )
}
