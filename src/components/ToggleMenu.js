import React from 'react'
import styled, {keyframes}from 'styled-components'

const swipe=keyframes`
    0%{
        position:fixed;
        transform: translateX(100px); opacity:1;
    }
    100% {
        transform: translateX(0); opacity:0.93;
    }
`

const Nav=styled.div`
    background-color:#3B2313;
    height:100%;
    opacity:0.93;
    right:0;
    top:5%;
    position:fixed;
    z-index: 4;
    animation-name: ${swipe};
    animation-duration: 1s;
    @media only screen and (max-width: 768px) {
        width:100%;
    }
`
const NavLinks =styled.div`
    height:70%;
    padding-top:5rem;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: flex-end;
    @media only screen and (max-width: 768px) {
        align-items: center;
    }
`

const Link = styled.a`
    color:#E5E5E5;
    padding-right:3vw;
    margin-right:1vw;
    padding-left:5vw;
    font-size:1.2rem;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    text-decoration:none;
    &:hover{
        color:#FB9A28;
    }
`
const OrderLink = styled.a`
    color:#E5E5E5;
    padding-right:3vw;
    margin-right:1vw;
    padding-left:5vw;
    font-size:1.4rem;
    font-family: 'PT Sans', sans-serif;
    font-weight:600;
    text-align: center;
    text-decoration:none;
    &:hover{
        color:#FB9A28;
    }
    @media only screen and (min-width: 769px) {
        display:none;
    }
`


const ToggleMenu = () => {
    return (
        <Nav>
          <NavLinks>
                <OrderLink href="https://zona-grill-inc.square.site/" >ORDER ONLINE</OrderLink>
                    <Link href="/" >HOME</Link>
                    <Link href="/hours-location" >HOURS/LOCATION</Link>
                    <Link href="/menu" >MENU</Link>
                    <Link href="/services">SERVICES</Link>
                    <Link href="/our-family" >OUR FAMILY</Link>
                    <Link href="/contact-us" >CONTACT US</Link>
          </NavLinks>
        </Nav>
    )
}

export default ToggleMenu
