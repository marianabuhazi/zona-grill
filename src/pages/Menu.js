import React from 'react'
import styled from 'styled-components'
import NavBar from "../components/NavBar.js"
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import ItemCard from "../components/Menu/ItemCard.js"


const Fire = styled.img`
    width:100%;
    height:550px;
    object-fit:cover;
    position:fixed;
`
const Title = styled.div`
  position:absolute;
  display:block;
  margin:auto;
  top:9rem;
  background-color:#F9450C;
  padding-left:2.5rem;
  padding-right:2.5rem;
  color:white;
  opacity:0.95;
  text-align:center;
  font-size:1.8rem;
  font-family: 'Sarala', sans-serif;
  font-weight:600;
  text-shadow: 1.5px 1.5px #474747;
  @media only screen and (max-width: 768px) {
        top:8rem;
    }
`

const Menu = () => {
    return (
        <div>
            <NavBar/>
            <Fire src={invertedFire}/>
            <Title>Menu</Title>
            <ItemCard/>
        </div>
    )
}

export default Menu
