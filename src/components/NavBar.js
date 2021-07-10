import logo from "../images/logo.PNG"
// import arrow from "../images/arrow.png"
import patacones from "../images/patacones.png"
import styled from 'styled-components'

const Nav = styled.div`
    background-color:#3B2313;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items: center;
    position: fixed;
    
    
`
const Logo = styled.img`
    width:16vw;
    padding:0.5vw 0vw 0.8vw 2vw;
    /* @media only screen and (max-width: 1000px) {
        width:30vh;
        display:block;
        margin: auto;
    } */
`
const NavLinks = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:flex-end;
    align-items: center;
    padding-right:2vw;
    /* @media only screen and (max-width: 1000px) {
        display:none;
    } */

`
const Link = styled.a`
    color:#E5E5E5;
    padding-right:2vw;
    padding-left:2vw;
    font-size:1.4vw;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    text-decoration:none;
`
const Arrow = styled.img`
    width:4%;
    display:inline;
    margin:0;
    padding:0;
`
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

`

const NavBar = () => {
    return (
        <div>
            <Nav>
                <a href="/"><Logo src={logo} alt="Zona Grill Logo" /></a>
                <NavLinks>
                    <Link href="/hours-location">HOURS/LOCATION</Link>
                    <Link href="/menu">MENU</Link>
                    <Link href="/services">SERVICES</Link>
                    <Link href="/our-family">OUR FAMILY</Link>
                    <Link href="/contact-us">CONTACT US</Link>
                    <OrderLink href="https://zona-grill-inc.square.site/">ORDER ONLINE</OrderLink>
                </NavLinks>
            </Nav>
            <img src={patacones} style={{ width: '100%' }} />
            <img src={patacones} style={{ width: '100%' }} />
            <img src={patacones} style={{ width: '100%' }} />
            <img src={patacones} style={{ width: '100%' }} />
        </div>
    )
}

export default NavBar
