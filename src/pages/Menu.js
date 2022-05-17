import React from 'react'
import styled from 'styled-components'
import NavBar from "../components/NavBar.js"
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import ItemCard from "../components/Menu/ItemCard.js"
import image from '../images/Menu/doubleBurgers.png'


const appetizers = [
    {
        src:{image},
        name:'Tequeños',
        desc:`Fried cheese sticks served with Mayo-Ketchup or guava-chipotle sauce.`,
        price:'$5.50'
    },
    {
        src:`../../images/Menu/doubleBurgers.png`,
        name:'Cachapa',
        desc:`Sweet corn pancake filled with soft white cheese, topped with shredded cheese and sour cream.`,
        price:'$10'
    },
    {
        src:`../../images/Menu/doubleBurgers.png`,
        name:'Hot Dog',
        desc:`Topped with cole, potato sticks, Zona Grill sauce, ketchup and shredded Gouda cheese.`,
        price:'$4'
    },
    {
        src:`../../images/Menu/doubleBurgers.png`,
        name:'Patacón',
        desc:`Fried green plantain served with shredded beef, chicken, grilled pork or mixed. Topped with cole, Zona Grill sauce, 
        Ketchup and shredded white cheese.`,
        price:'$9/$11'
    },
    {
        src:{image},
        name:'Pepito',
        desc:`French baguette served with grilled chicken, steak, or mixed. Topped with cole, Zona Grill sauce, Ketchup, 
        corn, potato sticks and shredded Gouda cheese.`,
        price:'$13/$14'
    }
]

const burgers = [
    {
        src:{image},
        name:'Caraqueña',
        desc:`Choice of beef patty, grilled chicken or grilled pork. Contains: ham, 
        American cheese, bacon, fried egg, cole, potato sticks, Zona Grill sauce and Ketchup..`,
        price:'$10'
    },
    {
        src:`../../images/Menu/doubleBurgers.png`,
        name:'Caraqueña Doble',
        desc:`Two choices of beef patty, grilled chicken or grilled pork. Contains: ham, American cheese, 
        bacon, fried egg, cole, potato sticks, Zona Grill sauce and Ketchup. `,
        price:'$12'
    },
    {
        src:`../../images/Menu/doubleBurgers.png`,
        name:'Brutal',
        desc:`Beef patty, grilled chicken and grilled pork. Contains: ham, American cheese, bacon, fried egg, cole, potato sticks, Zona Grill sauce and Ketchup..`,
        price:'$14'
    }
]

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
  background-color:#F79521;
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

const Items = styled.div`
    margin:auto;
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    position:relative;
    top:12rem;
    flex-wrap:wrap;
    padding-top:3rem;
    padding-bottom:8rem;
`

const SectionHeader = styled.div`
  width:100%;
  position:relative;
  top:12rem;
  opacity:0.95;
  font-size:2rem;
  text-align:center;
  font-family: 'Sarala', sans-serif;
`

const StickyNav = styled.div`
  display:flex;
  justify-content:space-around;
  position: fixed;
  top: 4.15rem;
  background-color: #F9450C;
  width:100%;
  z-index:3;
  padding:0.8rem 0rem;
  overflow:auto;
  white-space: nowrap;
`

const StickyNavLinks = styled.span`
    color:white;
    font-family: 'PT Sans', 'sans-serif';
    font-weight:600;
    font-size:0.9rem;
`

const Menu = () => {
    return (
        <div>
            <NavBar/>
            <Fire src={invertedFire}/>
            <Title>Menu</Title>
            <StickyNav>
                <a href="/menu/#Appetizers">
                    <StickyNavLinks>
                        Appetizers
                    </StickyNavLinks>
                </a>
                <a href="/menu/#Burgers">
                    <StickyNavLinks>
                        Burgers
                    </StickyNavLinks>
                </a>
                <a href="/menu/#Arepas">
                    <StickyNavLinks>
                        Arepas
                    </StickyNavLinks>
                </a>
                <a href="/menu/#MixedArepas">
                    <StickyNavLinks>
                        Mixed Arepas
                    </StickyNavLinks>
                </a>
                <a href="/menu/#Drinks">
                    <StickyNavLinks>
                        Drinks
                    </StickyNavLinks>
                </a>
            </StickyNav>
            <div id="Appetizers">
                <SectionHeader >Appetizers</SectionHeader>
                <Items>
                {appetizers.map((item) => {
                    return(
                            <ItemCard item={item} image={image}/>
                )})}
                </Items>
            </div>
            <div id="Burgers">
                <SectionHeader>Burgers</SectionHeader>
                <Items>
                {burgers.map((item) => {
                    return(
                            <ItemCard item={item} image={image}/>
                )})}
                </Items>
            </div>
            <div id="Arepas">
                <SectionHeader>Arepas</SectionHeader>
                <Items>
                {appetizers.map((item) => {
                    return(
                            <ItemCard item={item} image={image}/>
                )})}
                </Items>
            </div>

            <div id="MixedArepas">
                <SectionHeader>Mixed Arepas</SectionHeader>
                <Items>
                {appetizers.map((item) => {
                    return(
                            <ItemCard item={item} image={image}/>
                )})}
                </Items>
            </div>

            <div id="Drinks">
                <SectionHeader>Drinks</SectionHeader>
                <Items>
                {appetizers.map((item) => {
                    return(
                            <ItemCard item={item} image={image}/>
                )})}
                </Items>
            </div>
        </div>
    )
}

export default Menu
