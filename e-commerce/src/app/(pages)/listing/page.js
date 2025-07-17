import React from 'react'
import ProductCard from "./components/product-card";
import styles from "./page.module.css"
function ListingPage() {

  const productDetails = [
    {
      id : 1,
      product_details : {
        product_name : "T-shirt",
      }
    } , 
      {
      id : 2,
   product_details : {
        product_name : "Jeans",
      }
    } , 
      {
      id : 3,
   product_details : {
        product_name : "Full-Shirt",
      }
    } , 
      {
      id : 4,
   product_details : {
        product_name : "Half-Shirt",
      }
    } , 
      {
      id : 5,
   product_details : {
        product_name : "Shorts",
      }
    }
  ]
  return (
    <div className={styles.flex}>
        {
          productDetails?.map(product =>
            <ProductCard key={product.id} product={product}/>
         )
        }
    </div>
  )
}

export default ListingPage
