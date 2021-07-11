import React from 'react'
import NavBar from "../components/NavBar.js"
import patacones from "../images/patacones.png"
import ReactTypingEffect from 'react-typing-effect'
import styled from 'styled-components'

const Type=styled.div`
    background-color: rgba(59, 35, 19, 0.63); 
    padding:2vw;
    display:inline;
    position:absolute;
    border-bottom:solid 10px white;
    top:50%;
    width:34%;
    left:30%;
    z-index: 2;

`

const Home = () => {
    return (
        <div>
            
            <NavBar/>

            <div>
            <img src={patacones} style={{ width: '100%', zIndex: '1' }} />
            <Type><ReactTypingEffect style={{color:'white', fontSize:'4vw', textAlign:'center', }} speed="250" staticText="Home is where the" text={["Patacones are", "Caraqueñas are"]}/></Type>
            </div>
            <img src={patacones} style={{ width: '100%' }} />
        </div>
    )
}

export default Home
