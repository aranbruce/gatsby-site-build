import React from 'react'

import '../styles/styles.sass'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]', {
        speed: 700,
        speedAsDuration: true,
        easing: 'easeInOutCubic'
    })
    
}

export default Layout