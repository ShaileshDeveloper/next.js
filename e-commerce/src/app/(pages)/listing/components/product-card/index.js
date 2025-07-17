import React from 'react'
import styles from "./styles.module.css"


function ProductCard({product}) {
  const productName = product?.product_details?.product_name;
  return (
    <div>
        <div className={`${styles.cardContainer} , ${styles.mr10}`}>
              {productName}
        </div>
    </div>
  )
}

export default ProductCard
