import React from 'react'
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import Slideshow from "../components/Slideshow.js"
import FireFood from "../components/FireFood.js"
import Reviews from "../components/Reviews.js"

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Slideshow/>
            <FireFood/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default Home
