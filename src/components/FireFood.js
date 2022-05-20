import React from 'react'
import styled from 'styled-components'
import fire from "../images/fire.png"
import Gallery from "../components/Gallery.js"
import tequenos from "../images/tequenos.png"
import doubleBurgers from "../images/doubleBurgers.png"
import foodItems from "../images/foodItems.png"
import workers from "../images/workers.png"
import test1 from "../images/test1.jpg"
import test2 from "../images/test2.jpg"

const Header = styled.h1`
    margin-top:3rem;
    font-family: 'Sarala', sans-serif;
    margin-bottom:0;
    font-size:2.7rem;
    text-align:center;
    @media only screen and (max-width: 768px) {
        font-size:2rem;
        margin-left:0rem;
        text-align:center;
    }
    @media only screen and (max-width: 320px) {
        font-size:1.7rem;
        margin-left:0rem;
        text-align:center;
    }
    @media only screen and (min-width: 1800px) {
        font-size:3.5rem;
    }
`
const Header2 = styled.h1`
    font-family: 'Sarala', sans-serif;
    color:#335569;
    font-size:1.3rem;
    text-align:center;
    padding-bottom:0;
    margin:0;
    margin-top:1rem;
    @media only screen and (max-width: 768px) {
        font-size:1.1rem;
    }
    @media only screen and (max-width: 320px) {
        font-size:0.9rem;
    }
    @media only screen and (min-width: 1800px) {
        font-size:1.7rem;
    }
`

const FireBorder = styled.img`
    position:relative;
    width:100%;
    margin:auto;
    margin-top:0;
    height:25rem;
    bottom:12rem;
    padding-bottom:0;
    z-index:-1;
    object-fit:cover;
    @media only screen and (max-width: 500px) {
        bottom:13rem;
    }
    @media only screen and (min-width: 1500px) {
        height:28rem;
        bottom:8rem;
    }
`

const Subtitle = styled.h3`
    font-family: 'PT Sans', sans-serif;
    text-align:center;
    font-weight:400;
`

const FireFood = () => {
    const images = [doubleBurgers, foodItems, workers, test1, test2, tequenos ];
    const orderLinks =["https://zona-grill-inc.square.site/?location=11eb752c11ee4844b276ac1f6bbba828&item=21", "https://zona-grill-inc.square.site/?location=11eb752c11ee4844b276ac1f6bbba828&item=2", "https://zona-grill-inc.square.site/?location=11eb752c11ee4844b276ac1f6bbba828&item=5", "https://zona-grill-inc.square.site/?location=11eb752c11ee4844b276ac1f6bbba828&item=14"] 
    return (
        <div>
            <Header>Menu Options</Header>
            <Subtitle>As seen on our social media</Subtitle>
            <Header2>Click to order this item ⬇️</Header2>
            <Gallery images={images} links={orderLinks}/>
            <FireBorder src={fire}></FireBorder>
        </div>
    )
}

export default FireFood
