import logo from "../images/logo.PNG"
import menu from "../images/menu.png"
import x from "../images/x.png"
// import arrow from "../images/arrow.png"
import patacones from "../images/patacones.png"
import styled from 'styled-components'
import '../App.css'
import ToggleMenu from "../components/ToggleMenu.js"
import {useState} from 'react';


const WebNav = styled.div`
    background-color:#3B2313;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items: center;
    position: fixed;
    @media only screen and (max-width: 768px) {
        display: none;
    } 
`

const MobileNav = styled.div`
    background-color:#3B2313;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    @media only screen and (min-width: 768px) {
        display: none;
    } 
`
const Logo = styled.img`
    width:16vw;
    padding:0.5vw 0vw 0.8vw 2vw;
    @media only screen and (max-width: 900px) {
        width:20vw;
    }
    @media only screen and (max-width: 768px) {
        width:30vh;
        display:block;
        margin-left:3%;
        padding:0.5vw 0vw 0.9vw 2vw;
    }
`
const MobileMenu = styled.img`
    width:1.8rem;
    display:block;
    margin-right:3vw;
    opacity:0.95;
    cursor:pointer;
    &:hover{
        opacity:1;
        width:1.83rem;
    }
    @media only screen and (min-width: 768px) {
        display:none;
    }
`
const NavLinks = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:flex-end;
    align-items: center;
    padding-right:2vw;


`
const Link = styled.a`
    color:#E5E5E5;
    padding-right:2vw;
    padding-left:2vw;
    font-size:1.4vw;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    text-decoration:none;
    @media only screen and (max-width: 1000px) {
        font-size:1.6vw;
        padding-right:1.7vw;
        padding-left:1.7vw;
    }
    &:hover{
        text-shadow: 1px 0px #E5E5E5;
        transition-duration: 0.3s;

    }
`
// const Arrow = styled.img`
//     width:4%;
//     display:inline;
//     margin:0;
//     padding:0;
// `
const OrderLink = styled.a`
    color:#E5E5E5;
    padding:0.6vw 1.8vw 0.6vw 1.8vw;
    font-size:1.4vw;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    border:solid 2px #F79521;
    font-weight:600;
    margin-left:3vw;
    text-decoration:none;
    &:hover{
        box-shadow:0px 0px 0px 1px #F79521 inset;
        transition: box-shadow 0.3s ease-in-out;
    }
    @media only screen and (max-width: 1000px) {
        font-size:1.6vw;
        padding-right:1.7vw;
        padding-left:1.7vw;
    }

`

const NavBar = () => {
    const [toggle, setToggle]= useState({show:false, img:menu});
    const showMenu=()=>{
        toggle.show===false? setToggle({show:true, img:x}): setToggle({show:false, img:menu});
    }
    return (
        <div>
            <WebNav>
                <a href="/"><Logo src={logo} alt="Zona Grill Logo" /></a>
                <NavLinks>
                    <Link href="/hours-location" >HOURS/LOCATION</Link>
                    <Link href="/menu" >MENU</Link>
                    <Link href="/services">SERVICES</Link>
                    <Link href="/our-family" >OUR FAMILY</Link>
                    <Link href="/contact-us" >CONTACT US</Link>
                    <OrderLink href="https://zona-grill-inc.square.site/" >ORDER ONLINE</OrderLink>
                </NavLinks>
            </WebNav>
            <MobileNav>
                    <a href="/"><Logo src={logo} alt="Zona Grill Logo"/></a> 
                    <MobileMenu src={toggle.img} alt="Menu toggle" onClick={showMenu}/>
                </MobileNav>
                {toggle.show? <ToggleMenu/> : null}
            {/* <img src={patacones} style={{ width: '100%' }} />
            <img src={patacones} style={{ width: '100%' }} />
            <img src={patacones} style={{ width: '100%' }} />
            <img src={patacones} style={{ width: '100%' }} /> */}
        </div>
    )
}

export default NavBar
