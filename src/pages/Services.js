import React from 'react'
import NavBar from "../components/NavBar.js"
import styled from 'styled-components'
import invertedFire from "../images/HoursLocation/InvertedFire.png"
import foodtruck from '../images/Services/food-truck-main.jpg'
import catering from '../images/Services/catering.jpeg'
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
    width:14rem;
    height:14rem;
    object-fit:cover;
    padding-bottom:1rem;
`

const Paragraph = styled.p`
    font-family: 'PT Sans', sans-serif;
    font-weight:400;
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
    align-items:center;
`

const Spacing = styled.div`
    margin:12rem;
`
const Bold = styled.span`
    font-weight:600;
    font-family:'Sarala','sans-serif';
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
                        <Image src={foodtruck} alt="Zona Grill Food Truck"/>
                        <Paragraph><Bold>Zona Grill Venezuelan Food</Bold> is a family-owned food truck in Wynwood, FL founded in 2013. 
                            For almost a decade, we have served thousands of clients from all over the world. <br/><br/>
                            Our goal is to provide our clients with a top-notch service,
                            and the best quality food. <br/>Our food style is: "homemade Venezuelan street food". What we mean is: our food is always fresh,
                            always homemade by us, and always representing our country, Venezuela.<br/><br/>
                            Our delicacies include: burgers, hot dogs, cachapas, tequeños, arepas and more. Unlike our competitors, we can guarantee you that our food does not come from frozen or processed ingredients.<br/><br/>
                            We are truly a <Bold>family business</Bold>, just picture it: Grandma Blanca is the owner, Uncle Richard "El Gordo" is the cook,
                            Mom Patty is the manager, and I, Marian bring you all the online presence. All our employees are family members, and when you visit us we too will treat you like family.
                            <br/><br/>Our menu options are meant to bring you a taste of our home country and happiness. We hope you enjoy!
                            <br/><br/><Bold><a href="https://zona-grill-inc.square.site/">Order online</a></Bold>, or call<Bold> 786-930-9930</Bold> to order by phone.</Paragraph>
                    </TextImgHeader>
            </Wrapper>
            <Wrapper>
                    <SectionHeader>Catering</SectionHeader>
                    <TextImgHeader rev>
                        <Image src={catering} alt="Zona Grill Catering"/>
                        <Paragraph>We have a catering service!<br/><br/>
                        <Bold>Here's how it works</Bold>: We will establish a pricing estimate with you by phone or email, based on event size and menu requests. Then, we will bring our food truck to your location, 
                        and provide an "all-you-can-eat" service to your party guests, although you can make adjustments. You could also choose a cater-only service at which we will just drop off our delicious food. 
                        <br/><br/>For the first option, we will charge a set price for relocation of our truck. Then, we will charge a set price per person for the "all-menu" option. 
                        <br/><br/>We will serve your guests at the food truck window first-come or you can request in advance
                        that all your guests submit their orders via our Zona Grill Online Order Form, and we will have all food ready once we arrive at your party.
                        <br/><br/>If you have other ideas about how you want us to cater the event, we are happy to accomodate all your suggestions and needs!
                        <br/><br/>Contact Yackselys Zambrano at <Bold>zonagrillmiami@gmail.com </Bold>or <Bold>786-370-0271</Bold> for the quote.</Paragraph>
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
