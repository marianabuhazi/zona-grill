import React from 'react'
import welcomeHome from "../images/welcome-home.png"
import fence from "../images/fence.png"
import workers from "../images/workers.png"
import foodTruck from "../images/food-truck.png"
import styled from 'styled-components'
import TransparentBtn from "../components/TransparentBtn.js"
import "./WelcomeHome.css"

const HeaderLogo = styled.img`
    display:block;
    width:25rem;
    margin:auto;
    padding-top:5vh;
    @media only screen and (max-width: 768px) {
        width:22rem;
    }
    @media only screen and (max-width: 600px) {
        width:20rem;
    }
    @media only screen and (max-width: 425px) {
        width:18rem;
    }
    @media only screen and (max-width: 325px) {
        width:15rem;
    }
    @media only screen and (min-width: 1800px) {
        width:27rem;
    }
`

const Border = styled.img`
    display:block;
    position:relative;
    width:100%;
    margin:auto;
    margin-top:0;
    bottom:3rem;
    height:300px;
    object-fit:cover;
    z-index:1;
    @media only screen and (max-width: 425px) {
        height:250px;
    }
    @media only screen and (min-width: 1600px) {
        height:450px;
    }
    
`

const WindowImages = styled.div`
    width:80%;
    margin:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding-top:5vh;
    padding-bottom:0;
    flex-wrap:wrap;
`

const Image = styled.img`
    width:17rem;
    height:15rem;
    object-fit:cover;
    border: solid white 0.3rem;
    opacity:0.95;
    &:hover{
        opacity:1;
    }
    z-index:3;
    @media only screen and (max-width: 768px) {
        width:15rem;
        height:13rem;
    }
    @media only screen and (max-width: 425px) {
        width:13.5rem;
        height:11.5rem;
    }
    @media only screen and (max-width: 320px) {
        width:12rem;
        height:10rem;
    }
    @media only screen and (min-width: 1600px) {
        width:23rem;
        height:21rem;
    }
`

const Text = styled.span`
    font-family: 'PT Sans', sans-serif;
    font-size:1.3rem;
    padding-bottom:2vh;
    color:#FFFFFF;
    position:relative;
    bottom:3rem;
    left:1.4rem;
    z-index:3;

`

const ImageTextContainer = styled.a`
    display:flex;
    flex-direction:column;
    text-decoration:none;
`


const WelcomeHome = () => {
    return (
        <div>
            {/* <WindowImages>
                <ImageTextContainer >
                    <Image src={workers}/>
                        <Text>Our Services</Text>
                    </ImageTextContainer>
                    <ImageTextContainer >
                        <Image src={foodTruck}/>
                            <Text>Get to know us</Text>
                    </ImageTextContainer>
                </WindowImages>
            <Border src={fence}/>        */}
        </div>
    )
}

export default WelcomeHome
