import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Products.module.css"

export default function ProductCards({ products }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productCards}>
        {products?.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className={styles.productCard}>
                <div className={styles.imgWrapper}>
                  <Image
                    width={800}
                    height={800}
                    src={product.product_images[0].get_image}
                    alt={product.name}
                  />
                </div>
                <div className={styles.name}>{product.name}</div>
                <div className={`nav-text lighter`}>{product.category}</div>
                <div className={`nav-text`}>R {product.price.toFixed(2)}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
