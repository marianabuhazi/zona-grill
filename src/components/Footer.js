import React from 'react'
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: black;
    padding:6vh 6vw 6vh 6vw;
`

const Slogan = styled.h1`
    font-family: 'PT Mono', monospace;
    color:white;
    font-weight:400;
    font-size:1.4rem;
    text-align:center;
    margin-bottom:0rem;
    @media only screen and (max-width: 425px) {
        font-size:1.2rem;
    }
`
const Subtitle = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    color:white;
    margin-left:2rem;
    font-size:1.9rem;
    text-align:center;
    margin-top:0.3rem;
    margin-bottom:1.8rem;
    @media only screen and (max-width: 425px) {
        font-size:1.6rem;
    }
`

const Span = styled.span`
    color: #F79521;
    font-size:1.5rem;
    font-family: 'Nanum Myeongjo', serif;
    @media only screen and (max-width: 425px) {
        height:1rem;
    }
    @media only screen and (max-width: 320px) {
        height:0.7rem;
    }
`
const SocialMediaIcon = styled.img`
    height:3.2rem;
    margin-left:2vw;
    @media only screen and (max-width: 425px) {
        height:2.9rem;
    }
    @media only screen and (max-width: 320px) {
        height:2.4rem;
    }
`
const SocialMediaIconGoogle =styled.img`
    height:3rem;
    @media only screen and (max-width: 425px) {
        height:2.7rem;
    }
    @media only screen and (max-width: 320px) {
        height:2.1rem;
    }
`

const SocialMediaLinks= styled.div`
    margin:auto;
    display:flex;
    width:45%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    @media only screen and (max-width: 768px) {
        width:65%;
    }
    @media only screen and (max-width: 600px) {
        width:80%;
    }
    @media only screen and (max-width: 425px) {
        width:85%;
    }
    margin-bottom:3rem;
`
const Rights = styled.h1`
    font-family: 'PT Mono', monospace;
    color:white;
    font-weight:400;
    font-size:0.8rem;
    text-align:center;
`

const Footer = () => {
    return (
        <Wrapper>
            <Slogan>Join the family,</Slogan>
            <Subtitle>FOLLOW US <Span>&gt;</Span></Subtitle>
            <SocialMediaLinks>
                <a href="https://www.instagram.com/zonagrill/"><SocialMediaIcon src={instagram} alt="Instagram icon"/></a>
                <a href="https://www.facebook.com/Zona-Grill-468491800190424/"><SocialMediaIcon src={facebook} alt="Facebook icon"/></a>
                <a href="https://www.google.com/search?safe=active&ei=vawzXbrJG9Gq5wLujqPgBg&q=Zona+Grill+Venezuelan+Food&oq=Zona+Grill+Venezuelan+Food&gs_l=psy-ab.3..0j38.38352.46443..47511...0.0..0.267.1074.3j3j2......0....1..gws-wiz.......0i71j0i13.eFVNyR6ErjE&ved=0ahUKEwj6m7f028TjAhVR1VkKHW7HCGwQ4dUDCAo&uact=5#lrd=0x88d9b15318601851:0xe71d9e37556d0ec7,1,,,"><SocialMediaIconGoogle src={google} alt="Google icon"/></a>
            </SocialMediaLinks>
            <Rights>©Copyright. All rights reserved. Zona Grill Venezuelan Food. <br></br>Created by Marian Abuhazi.</Rights>
        </Wrapper>
    )
}

export default Footer
