import React from 'react'
import styled from 'styled-components'
import NavBar from "../components/NavBar.js"
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import ItemCard from "../components/Menu/ItemCard.js"
import image from '../images/Menu/doubleBurgers.png'
import Footer from "../components/Footer.js"
import './Menu.css'


const appetizers = [
    {
        src:'tequenos',
        name:'Tequeños',
        desc:`Fried cheese sticks served with Mayo-Ketchup or guava-chipotle sauce.`,
        price:'$5.50'
    },
    {
        src:'cachapa',
        name:'Cachapa',
        desc:`Sweet corn pancake filled with soft white cheese, topped with shredded cheese and sour cream.`,
        price:'$10'
    },
    {
        src:'hotdog',
        name:'Hot Dog',
        desc:`Topped with green cabbage, potato sticks, Zona Grill sauce, ketchup and shredded Gouda cheese.`,
        price:'$4'
    },
    {
        src:'patacon',
        name:'Patacón',
        desc:`Fried green plantain served with shredded beef, chicken, grilled pork or mixed. Topped with green cabbage, Zona Grill sauce, 
        Ketchup and shredded white cheese.`,
        price:'$9/$11'
    },
    {
        src:'pepito',
        name:'Pepito',
        desc:`French baguette served with grilled chicken, steak, or mixed. Topped with green cabbage, Zona Grill sauce, Ketchup, 
        corn, potato sticks and shredded Gouda cheese.`,
        price:'$13/$14'
    }
]

const burgers = [
    {
        src:'caraquena',
        name:'Caraqueña',
        desc:`1 choice of beef patty, grilled chicken or grilled pork. Contains: ham, 
        American cheese, bacon, fried egg, green cabbage, potato sticks, Zona Grill sauce and Ketchup..`,
        price:'$10'
    },
    {
        src:'doble',
        name:'Caraqueña Doble',
        desc:`2 choices of beef patty, grilled chicken or grilled pork. Contains: ham, American cheese, 
        bacon, fried egg, green cabbage, potato sticks, Zona Grill sauce and Ketchup. `,
        price:'$12'
    },
    {
        src:'brutal',
        name:'Brutal',
        desc:`3 meats: beef patty, grilled chicken and grilled pork. Contains: ham, American cheese, bacon, fried egg, green cabbage, potato sticks, Zona Grill sauce and Ketchup..`,
        price:'$14'
    }
]

const arepas = [
    {
        src:'reina',
        name:'Reina Pepia Arepa',
        desc:`Filled with shredded chicken, guacamole and Mayo.`,
        price:'$9'
    },
    {
        src:'mechada',
        name:'Shredded Meat Arepa',
        desc:`Choice of shredded beef, shredded chicken or grilled pork. `,
        price:'$12'
    },
    {
        src:'cheese',
        name:'Cheese Arepa',
        desc:`Choice of shredded white, shredded Gouda or soft Guayanés cheese.`,
        price:'$14'
    }
]

const mixedArepas = [
    {
        src:'pelua',
        name:'Arepa Pelua',
        desc:`Filled with shredded beef and shredded Gouda cheese.`,
        price:'$9'
    },
    {
        src:'peluavieja',
        name:'Arepa Pelua Vieja',
        desc:`Filled with shredded beef and shredded white cheese. `,
        price:'$12'
    },
    {
        src:'catira',
        name:'Arepa Catira',
        desc:`Filled with shredded chicken and shredded Gouda cheese.`,
        price:'$9'
    },
    {
        src:'catiravieja',
        name:'Arepa Catira Vieja',
        desc:`Filled with shredded chicken and shredded white cheese. `,
        price:'$12'
    },
    {
        src:'sifrina',
        name:'Arepa Sifrina',
        desc:`Reina Pepia with shredded Gouda cheese.`,
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
  border-radius:0px 15px 15px 0px;
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
    @media only screen and (max-width: 425px) {
        width:100%;
    }
`

const SectionHeader = styled.div`
  width:100%;
  position:relative;
  top:13rem;
  opacity:0.95;
  font-size:1.8rem;
  text-align:center;
  text-decoration:underline;
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
  padding:0.9rem 0rem;
  overflow:auto;
  white-space: nowrap;
`

const StickyNavLinks = styled.span`
    
`

const Spacing = styled.div`
    margin:8rem;
`

const Menu = () => {
    return (
        <div>
            <NavBar/>
            <Fire src={invertedFire}/>
            <Title>Menu</Title>
            <StickyNav>
                <a className="link" href="/menu/#Appetizers">
                        Appetizers
                </a>
                <a className="link" href="/menu/#Burgers">
                        Burgers
                </a>
                <a className="link" href="/menu/#Arepas">
                        Arepas
                </a>
                <a className="link" href="/menu/#MixedArepas">
                        Mixed Arepas
                </a>
            </StickyNav>
            <div id="Appetizers">
                <SectionHeader >Appetizers</SectionHeader>
                <Items>
                {appetizers.map((item) => {
                    return(
                            <ItemCard item={item} image={item.src}/>
                )})}
                </Items>
            </div>
            <div id="Burgers">
                <SectionHeader>Burgers</SectionHeader>
                <Items>
                {burgers.map((item) => {
                    return(
                            <ItemCard item={item} image={item.src}/>
                )})}
                </Items>
            </div>
            <div id="Arepas">
                <SectionHeader>Arepas</SectionHeader>
                <Items>
                {arepas.map((item) => {
                    return(
                            <ItemCard item={item} image={item.src}/>
                )})}
                </Items>
            </div>

            <div id="MixedArepas">
                <SectionHeader>Mixed Arepas</SectionHeader>
                <Items>
                {mixedArepas.map((item) => {
                    return(
                            <ItemCard item={item} image={image}/>
                )})}
                </Items>
            </div>
            <Spacing>
                 <br/>
            </Spacing>
            <Footer/>
        </div>
    )
}

export default Menu
