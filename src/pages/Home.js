import React from 'react'
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import Slideshow from "../components/Slideshow.js"
import FoodGallery from "../components/FoodGallery.js"
import Reviews from "../components/Reviews.js"

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Slideshow/>
            <FoodGallery/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default Home
