import React from 'react'
import NavBar from "../components/NavBar.js"
import styled from 'styled-components'
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import image from '../images/Menu/doubleBurgers.png'
import Footer from "../components/Footer.js"

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
    color:white;
    font-family: 'PT Sans', 'sans-serif';
    font-weight:600;
    font-size:1rem;
    opacity:0.9;
`

const Wrapper = styled.div`
    margin:auto;   
    display:block;
    float:center;
    position:relative;
    top:16rem;
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
  color:#F9450C;
  text-decoration:underline;
  opacity:0.9;
  padding-bottom:1rem;
`

const Image = styled.img`
    width:12rem;
    height:12rem;
    padding-bottom:1rem;
`

const Paragraph = styled.p`
    width:65%;
    @media only screen and (max-width: 768px) {
        width:100%;
    }
`

const TextImgHeader = styled.div`
    display:flex;
    flex-direction: ${props => props.rev ? "row-reverse" : "row"};
    justify-content:space-around;
    flex-wrap:wrap;
`

const Spacing = styled.div`
    margin:12rem;
`

const Services = () => {
    return (
        <div>
            <NavBar/>
            <Fire src={invertedFire}/>
            <Title>Services</Title>
            <Wrapper>
                    <SectionHeader>Food Truck</SectionHeader>
                    <TextImgHeader>
                        <Image src={image}/>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus nisi, iaculis vitae eros et, fringilla porta nisl. Nam dui metus, volutpat auctor nibh a, rhoncus lacinia massa. Nullam ac eleifend erat. Nunc nisi quam, tincidunt a felis sed, gravida interdum dolor. Curabitur ac ornare turpis, vitae semper justo. Quisque in suscipit diam.</Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Catering</SectionHeader>
                    <TextImgHeader rev>
                        <Image src={image}/>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus nisi, iaculis vitae eros et, fringilla porta nisl. Nam dui metus, volutpat auctor nibh a, rhoncus lacinia massa. Nullam ac eleifend erat. Nunc nisi quam, tincidunt a felis sed, gravida interdum dolor. Curabitur ac ornare turpis, vitae semper justo. Quisque in suscipit diam.</Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Spacing>
                 <br/>
            </Spacing>
            <Footer/>
        </div>
    )
}

export default Services
