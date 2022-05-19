import React from 'react'
import styled from 'styled-components'
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import LocationBox from '../components/HoursLocation/LocationBox.js'
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import palmTrees from "../images/HoursLocation/palm-trees.png"
import mountains from "../images/HoursLocation/mountains.png"
import rollercoaster from "../images/HoursLocation/rollercoaster.png"

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
  text-align:center;
  font-size:1.8rem;
  font-family: 'Sarala', sans-serif;
  font-weight:600;
  text-shadow: 1.5px 1.5px #474747;
  @media only screen and (max-width: 768px) {
        top:8rem;
        
    }
`

// const Cards = styled.div`
//     display:flex;
//     flex-direction:row;
//     width:90%;
//     justify-content:space-around;
//     margin:auto;
//     flex-wrap:wrap;
//     @media only screen and (max-width: 768px) {
//         display:none;
//     }
// `

const CelebrityHeader = styled.h1`
    text-align:center;
    font-family: 'Sarala', sans-serif;
    padding:0.11rem;
    padding-bottom:0;
    @media only screen and (min-width: 769px) {
        display:none;
    }
    @media only screen and (max-width: 768px) {
        font-size:1.5rem;
    }
    @media only screen and (max-width: 425px) {
        font-size:1.3rem;
    }
    @media only screen and (max-width: 320px) {
        font-size:1.25rem;
    }

`
// const CelebrityHeader2 = styled.h2`
//     position:relative;
//     bottom:10rem;
//     text-align:center;
//     font-family: 'Sarala', sans-serif;
//     font-size:1.3rem;
//     padding:1rem;
//     padding-top:0;
//     @media only screen and (max-width: 768px) {
//         font-size:1.1rem;
//     }
//     @media only screen and (max-width: 425px) {
//         font-size:0.9rem;
//     }
//     @media only screen and (max-width: 320px) {
//         font-size:0.8rem;
//     }
// `
const Span = styled.span`
    font-family: 'Sarala', sans-serif;
    color:#F9450C;
    text-decoration:underline;
`

const OrderLink = styled.a`
    width:10rem;
    position: relative;
    color:#3B2313;
    padding:0.5rem 0.8rem 0.5rem 0.8rem;
    font-size:1rem;
    font-family: 'IBM Plex Sans', sans-serif;
    text-align: center;
    border:solid 3px #F79521;
    font-weight:700;
    text-decoration:underline;
    display:block;
    margin-top:3vh;
    margin-left:auto;
    margin-right:auto;
    &:hover{
        box-shadow:0px 0px 0px 1px #F79521 inset;
        transition: box-shadow 0.2s ease-in-out;
    }
    @media only screen and (min-width: 769px) {
        display:none;
    }
    @media only screen and (max-width: 768px) {
        width:8rem;
        font-size:1rem;
    }

`

const Spacing = styled.div`
    margin:12rem;
`

const HoursLocation = () => {
    return (
        <div>
            <NavBar/>
            <Fire src={invertedFire}/>
            <Title>Hours/Location</Title>
            <LocationBox 
                city="Miami" 
                address="156 NE 28th St, Miami, Florida 33137" 
                image={palmTrees} 
                sub1="Hours" 
                sub2="Parking"
                text1
                text2="Free parking is offered at our location. 
                Spots are limited, but an hourly lot can be found across the street."
            />
            <LocationBox 
                city="Denver" 
                address="We are growing. See you soon, Denver!" 
                image={mountains} 
                imageWidth="18"
            />
            <LocationBox 
                city="Orlando" 
                address="We are excited to open in Orlando. Coming Soon!" 
                image={rollercoaster} imageWidth="10"
            />
            {/* <CelebrityHeader2>Here are some  Zona Grill fans you may recognize...</CelebrityHeader2> */}
            {/* <Cards>
                <CelebrityCard image={WillyMartin} name="Willy Martin" position="Venezuelan Actor"/>
                <CelebrityCard image={WillyMartin} name="Willy Martin" position="Venezuelan Actor"/>
                <CelebrityCard image={WillyMartin} name="Willy Martin" position="Venezuelan Actor"/>
            </Cards> */}
            <Spacing>
                 <br/>
            </Spacing>
            <Footer/> 
        </div>
    )
}

export default HoursLocation
