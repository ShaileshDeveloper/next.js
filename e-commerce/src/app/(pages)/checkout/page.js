
"use client"
import React , { createContext, useContext, useState } from 'react'
import styles from "./page.module.css";
import { useTheme } from '@/app/context/theme-context';

function CheckoutPage() {


  const { theme, toggleTheme } = useTheme();


  const backgroundColor = theme === "dark" ? "#121212" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const productDetails = [
    {
      id: 1,
      product_details: {
        product_name: "T-shirt",
      }
    },
    {
      id: 2,
      product_details: {
        product_name: "Jeans",
      }
    },
    {
      id: 3,
      product_details: {
        product_name: "Full-Shirt",
      }
    },
    {
      id: 4,
      product_details: {
        product_name: "Half-Shirt",
      }
    },
    {
      id: 5,
      product_details: {
        product_name: "Shorts",
      }
    }
  ]
  return (
        <div style={{ backgroundColor, color: textColor, minHeight: "100vh", padding: "2rem" }}>
      <button onClick={toggleTheme} style={{ marginBottom: "1rem" }}>
        Toggle Theme
      </button>
      <div className={styles.flex}>
       yfuds fubsdubfusd
      </div>
    </div>
  )
}

export default CheckoutPage
