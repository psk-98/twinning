import { motion } from "framer-motion"
import Link from "next/link"

export default function Custom404() {
  return (
    <>
      <div>404 | Page not found</div>
      <div>
        <div>Keep shopping</div>
        <Link href="products/women">Women</Link>
        <Link href="products/men">Men</Link>
        <Link href="products/kids">Kids</Link>
      </div>
    </>
  )
}
