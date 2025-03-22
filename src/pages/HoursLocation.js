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
  border-radius:0px 15px 15px 0px;
  @media only screen and (max-width: 768px) {
        top:8rem;
        
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
                city="Kissimmee" 
                address="2570 E Irlo Bronson Memorial Hwy, Kissimmee, Fl 34744" 
				// address="TEMPORARILY CLOSED: UNTIL FURTHER NOTICE"
                image={rollercoaster} 
                sub1="Hours" 
                sub2="Parking"
                text1
                text2="Free parking is offered at our location."
            />
			<LocationBox 
                city="Miami"
                address="PERMANENTLY CLOSED: 156 NE 28th St, Miami, Florida 33137." 
                image={rollercoaster} imageWidth="10"
            />
            <LocationBox 
                city="Denver" 
                address="We are growing. See you soon, Denver!" 
                image={mountains} 
                imageWidth="18"
            />
            <Spacing>
                 <br/>
            </Spacing>
            <Footer/> 
        </div>
    )
}

export default HoursLocation
