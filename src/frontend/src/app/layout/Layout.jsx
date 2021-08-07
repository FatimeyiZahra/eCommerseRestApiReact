import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import './style.css'

const Layout = ({children}) => {
    return (
        <div className='__dml container'>
        <Header />
        {children}
        <Footer />
      </div>
    )
}

export default Layout
