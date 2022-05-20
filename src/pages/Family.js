import React from 'react'
import styled from 'styled-components'
import NavBar from "../components/NavBar.js"
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import Footer from "../components/Footer.js"
import family from "../images/family.JPG"
import familyMain from "../images/the-family.jpg"
import image from '../images/Menu/doubleBurgers.png'
import job from '../images/job.png'
import blanca from '../images/blanca.jpeg'
import willy from '../images/willy-martin.JPG'
import michelle from '../images/michelle-lewin.JPG'
import eduardo from '../images/eduardo-orozco.JPG'
import camionViejo from '../images/camionViejo.jpeg'
import video from '../images/IMG_0599.mp4'
import video2 from '../images/IMG_0600.mp4'
import video3 from '../images/IMG_0601.mp4'

const Polaroid = styled.img`
    width:100%;
    object-fit:cover;
    height:25rem;
    opacity:0.9;
`

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
  z-index:2;
  border-radius:0px 15px 15px 0px;
  @media only screen and (max-width: 768px) {
        top:8rem;
    }
`
const Wrapper = styled.div`
    margin:auto;   
    display:block;
    float:center;
    position:relative;
    top:-2rem;
    width:65%;
    background-color: #ffedd9;
    margin-bottom:4rem;
    padding:2rem 3rem 3rem 3rem;
    border-radius:15px;
`

const SectionHeader = styled.div`
  width:100%;
  position:relative;
  font-size:2rem;
  text-align:center;
  font-family: 'Sarala', sans-serif;
  text-decoration:underline;
  color:#F9450C;
  opacity:0.9;
  padding-bottom:1rem;
`

const Image = styled.img`
    width:13rem;
    height:13rem;
    object-fit:cover;
`

const SquareImage = styled.img`
    width:13rem;
    height:13rem;
    object-fit:cover;
    padding:0.5rem;
`

const Paragraph = styled.p`
    width:65%;
    @media only screen and (max-width: 768px) {
        width:100%;
    }
`

const TextImgHeader = styled.div`
    display:flex;
    flex-direction:${props => props.rev ? "row-reverse" : "row"};
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
`
const TextVideoHeader = styled.div`
    display:flex;
    flex-direction:column-reverse;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
`

const Videos = styled.div`
    display:flex;
    flex-direction:row;
    width:90%;
    justify-content:space-around;
    flex-wrap:wrap;
`

const Subtitle = styled.h1`
  width:100%;
  position:relative;
  font-size:1.5rem;
  text-align:center;
  font-family: 'Sarala', sans-serif;
  color:black;
  opacity:0.9;
`
const SubDesc = styled.p`
  width:100%;
  position:relative;
  font-size:1rem;
  text-align:center;
  font-family: 'PT Mono', sans-serif;
  font-weight:400;
  color:black;
  opacity:0.9;
  padding-bottom:4rem;
`


const Family = () => {
    return (
        <div>
            <NavBar/>
            <Polaroid src={familyMain}/>
            <Title>Our Family</Title>
            <Wrapper>
                    <SectionHeader>Our Story</SectionHeader>
                    <TextImgHeader>
                        <Image src={blanca}/>
                        <Paragraph>Zona Grill is a family restaurant founded in April 1996, in Caracas, Venezuela, by the entrepreneur Blanca Morales. Over the years, she has served food with a rigorous control, aspiring to preserve her traditional childhood recipes and combine Venezuelan and Colombian seasonings. Blanca has produced dishes that have delighted the palates of the clientele in her native country. <br/><br/>
                        After her migration to the City of Miami in 2010, Blanca consolidated the idea of restarting the family business under the concept of a food truck, due to the boom in the novelty of selling quality street food. In this manner, and partnered with chef Richard Gonzalez, they developed simple recipes, to please night, street-food lovers, while respecting good quality. <br/><br/>
                        Currently, Zona Grill operates with a service-oriented work philosophy and each of the members of our staff are committed to the business' mission. We thank all our customers for their support over the past years, as we hope to continue to serve delicious food for years to come. <br/><br/>
                        Image: Blanca Morales, 2021 at Zona Grill
                        </Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Press</SectionHeader>
                    <TextImgHeader rev>
                        <Image src={camionViejo}/>
                        <Paragraph>Over the years, Zona Grill has received recognition from various media sources for its excellent service, and food quality.<br/><br/>
                        Read about us in the Miami New Times: <a href="https://www.miaminewtimes.com/restaurants/zona-grill-surprises-with-venezuelan-flavors-in-wynwood-6604099">Zona Grill Surprises With Venezuelan Flavors in Wynwood</a> <br/> <br/>
                        Read about us in the Miami New Times: <a href="https://www.miaminewtimes.com/restaurants/la-hamburguesa-caraque-a-not-just-another-hamburger-7548417">La Hamburguesa Caraqueña: Not Just Another Hamburger</a> <br/> <br/>
                        Image: Zona Grill, 2013 in Wynwood
                        </Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Customer Satisfaction</SectionHeader>
                    <TextVideoHeader>
                        <Videos>
                            <video width="300" height="auto" controls>
                                <source src={video2} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <br/>
                            <video width="300" height="auto" controls>
                                <source src={video3} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </Videos>
                        <Paragraph>Over the past decade we have served thousands of customers from all over the world. <br/><br/>
                        Below are three happy customers from Spain, and Colombia telling us how they feel about Zona Grill food. <br/><br/>
                        Videos: Zona Grill, 2015 in Wynwood <br/><br/>
                        </Paragraph>
                    </TextVideoHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Celebrities at Zona Grill</SectionHeader>
                    <TextImgHeader>
                    <Paragraph>From Venezuelan actors, to baseball players, to influencers, we have served just about everyone! <br/><br/>
                        Below are three happy customers you may recognize: Willy Martin (Venezuelan actor), Michelle Lewin (Fitness/lifestyle influencer), 
                        and Eduardo Orozco (Venezuelan actor). <br/><br/> 
                        Videos: Zona Grill, 2015 in Wynwood
                        </Paragraph>
                        <Paragraph>
                        </Paragraph>
                        <TextImgHeader>
                            <SquareImage src={willy}/>
                            <SquareImage src={michelle}/>
                            <SquareImage src={eduardo}/>
                        </TextImgHeader>
                    </TextImgHeader>
            </Wrapper>
            <Subtitle>Interesting in working with us?</Subtitle>
            <SubDesc>Contact our team: zonagrillmiami@gmail.com</SubDesc>
            <Footer/>
        </div>
    )
}

export default Family
