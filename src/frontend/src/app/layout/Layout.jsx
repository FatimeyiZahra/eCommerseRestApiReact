import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import './style.css'

const Layout = ({children}) => {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout
