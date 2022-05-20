import React from 'react'
import styled from 'styled-components'
import NavBar from "../components/NavBar.js"
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import foodItems from '../images/foodItems.png'
import careers from '../images/careers.JPG'
import catering from '../images/catering.JPG'
import Footer from "../components/Footer.js"

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
const Fire = styled.img`
    width:100%;
    height:550px;
    object-fit:cover;
    position:fixed;
`


const Wrapper = styled.div`
    margin:auto;   
    display:block;
    float:center;
    position:relative;
    top:16rem;
    width:60%;
    background-color: #ffedd9;
    margin-bottom:4rem;
    padding:2rem 3rem 3rem 3rem;
    border-radius:15px;
    @media only screen and (max-width: 768px) {
        width:65%;
    }
`

const SectionHeader = styled.div`
  width:100%;
  position:relative;
  font-size:2rem;
  text-align:center;
  font-family: 'Sarala', sans-serif;
  color:#F9450C;
  text-decoration:underline;
  opacity:0.9;
  padding-bottom:1rem;
`

const Image = styled.img`
    width:12rem;
    height:12rem;
    object-fit:cover;
    padding:1rem;
`

const Paragraph = styled.p`
    width:60%;
    padding:0.5rem;
    font-family: 'PT Sans', sans-serif;
    font-weight:400;
    @media only screen and (max-width: 768px) {
        width:100%;
    }
`

const TextImgHeader = styled.div`
    display:flex;
    flex-direction: ${props => props.rev ? "row-reverse" : "row"};
    justify-content:space-around;
    flex-wrap:wrap;
    align-items:center;
`

const Spacing = styled.div`
    margin:12rem;
`

const Bold = styled.span`
    font-weight:600;
    font-family:'Sarala','sans-serif';
`
const Color = styled.span`
    color:${props=> props.red ? '#F9450C' : '#FF7C02'};
`

const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <Fire src={invertedFire}/>
            <Title>Contact Us</Title>
            <Wrapper>
                    <SectionHeader>Ordering</SectionHeader>
                    <TextImgHeader>
                        <Image src={foodItems}/>
                        <Paragraph>We offer <Bold>takeout service</Bold> over the phone and through online ordering.<br/><br/>
                        <Bold>For phone ordering call</Bold>: <Color red><Bold>786-930-9930</Bold></Color> (only during operation hours)<br/><br/>
                        We also offer delivery through <Bold>UberEats and Postmates</Bold>, which can be requested directly on their app!<br/><br/></Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Careers</SectionHeader>
                    <TextImgHeader rev>
                        <Image src={careers}/>
                        <Paragraph><Color red><Bold>We are hiring!</Bold></Color> <br/><br/>
                        Reach out to our manager, Yackselys Zambrano with your contact information, qualifications, and any questions if interested in applying for a position at Zona Grill.<br/><br/>
                        <Color><Bold>zonagrillmiami@gmail.com</Bold></Color><br/><br/>
                        We would love to have you.<br/><br/>
                        See all available positions below:
                        <br/><br/>
                        <li>
                            Front Desk Service/Cashier
                        </li>
                        </Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Private Events</SectionHeader>
                    <TextImgHeader>
                        <Image src={catering}/>
                        <Paragraph>Want Zona Grill at your next corporate or private event?<br/><br/>
                        Reach out to our manager, Yackselys Zambrano, to request a quote for your event and explore all our catering options.<br/><br/>
                        <Color><Bold>zonagrillmiami@gmail.com<br/>
                        786-370-0271</Bold></Color><br/><br/>
                        At the moment we provide the following services: <br/><br/>
                        <li>We bring our food truck to your event</li>
                        <li>We charge you a set cost for relocation</li>
                        <li>We charge you a set cost per person</li>
                        <li>Catering is all you can eat</li> <br/><br/>
                        We would love to serve you.<br/><br/>
                        </Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Spacing>
                 <br/>
            </Spacing>
            <Footer/>
        </div>
    )
}

export default ContactUs
