"use client"

import React from 'react'
import { ThemeProvider } from '../context/theme-context'
function PagesLayout({children}) {

  return (
    <div>
        nav bar
        <ThemeProvider>
            <div> {children}</div>
        </ThemeProvider>
       
    </div>
  )
}

export default PagesLayout
