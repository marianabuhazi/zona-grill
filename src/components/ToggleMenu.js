import React from 'react'
import styled from 'styled-components'

const NavLinks=styled.div`
    background-color:#3B2313;
    width:45%;
    height:100%;
    opacity:0.9;
    right:0;
    top:12vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom:5vh;
    padding-top:5vh;
    position: fixed;
`
const Link = styled.a`
    color:#E5E5E5;
    padding-top:1vw;
    padding-right:3vw;
    margin-right:1vw;
    padding-left:3vw;
    padding-bottom:1vw;
    margin-top:1vw;
    margin-bottom:1vw;
    font-size:2.5vh;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    text-decoration:none;
    &:hover{
        text-shadow: 1px 0px #E5E5E5;
        transition-duration: 0.3s;
        background-color:#FB9A28;
    }
`

const Line= styled.div`
    color:white;
    text-align:center;
    width:85%;
    border-top:solid 0.5px white;
    padding-bottom:2vw;
    opacity: 0.5;
`
const ToggleMenu = () => {
    return (
        <div>
          <NavLinks>
              <Line/>
                <Link href="https://zona-grill-inc.square.site/" >ORDER ONLINE</Link>
                    <Link href="/hours-location" >HOURS/LOCATION</Link>
                    <Link href="/menu" >MENU</Link>
                    <Link href="/services">SERVICES</Link>
                    <Link href="/our-family" >OUR FAMILY</Link>
                    <Link href="/contact-us" >PRESS</Link>
                    <Link href="/contact-us" >CONTACT US</Link>
                    <Link href="/contact-us" >FOLLOW US</Link>
                    <Link href="/contact-us" >EMAIL SIGNUP</Link>
                    
          </NavLinks>
        </div>
    )
}

export default ToggleMenu
