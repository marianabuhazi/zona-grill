import React,{useState} from 'react';
import logo from "../images/logo.PNG"
import menu from "../images/menu.png"
import x from "../images/x.png"
import styled from 'styled-components'
import '../App.css'
import ToggleMenu from "../components/ToggleMenu.js"


const MobileNav = styled.div`
    background-color:#3B2313;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index:5;
`
const Logo = styled.img`
    width:10rem;
    margin-left:5vw;
    margin-right:15vw;
    padding-bottom:0.5vh;
    padding-top:0.5vh;
`
const MobileMenu = styled.img`
    width:1.8rem;
    display:block;
    opacity:1;
    margin-right:3vw;
    cursor:pointer;
    &:hover{
        opacity:0.9;
        box-shadow: 3px 3px 3px rgb(0 0 0 / 0.2);
    }
`
const OrderLink = styled.a`
    color:#E5E5E5;
    padding:0.6vw 1.5vw 0.6vw 1.5vw;
    font-size:1rem;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    border:solid 0.1rem #F79521;
    font-weight:600;
    text-decoration:none;
    margin-left:3vw;
    &:hover{
        box-shadow:0px 0px 0px 1px #F79521 inset;
        transition: box-shadow 0.3s ease-in-out;
    }
    @media only screen and (max-width: 768px) {
        display:none;
    }

`

const NavBar = () => {
    const [toggle, setToggle]= useState({show:false, img:menu});
    const showMenu=()=>{
        if(!toggle.show){
            setToggle({show:true, img:x})
        }
        else{
            setToggle({show:false, img:menu})
        }
    }
    return (
        <div>
            <MobileNav>
                    <OrderLink target="_blank" rel="noopener noreferrer" href="https://zona-grill-inc.square.site/">ORDER ONLINE</OrderLink>
                    <a href="/"><Logo src={logo} alt="Zona Grill Logo"/></a> 
                    <MobileMenu src={toggle.img} alt="Menu toggle" onClick={showMenu}/>
            </MobileNav>
            {toggle.show? <ToggleMenu/> : null}
        </div>
    )
}

export default NavBar
