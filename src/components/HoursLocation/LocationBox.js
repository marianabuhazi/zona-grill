import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    display:block;
    position:relative;
    top:-15rem;
    width:75%;
    margin:auto;
    background-color: #ffedd9;
    opacity:0.85;
    padding-bottom:0rem;
    margin-bottom:3rem;
    @media only screen and (max-width: 768px) {
        width:100%;
        top:-18rem;
    }
`

const City = styled.h1`
  font-size:2rem;
  font-family: 'Sarala', sans-serif;
  padding-top:1rem;
  padding-left:3rem;
  margin:0;
  color:#FF8B02;
  text-decoration:underline;
  @media only screen and (max-width: 768px) {
        padding-left:0;
        text-align:center;
        font-size:1.8rem;
    }
`

const Address = styled.h2`
  font-size:1.2rem;
  font-family: 'PT Sans', 'sans-serif';
  font-weight:400;
  padding-top:0rem;
  padding-left:3rem;
  color:black;
  @media only screen and (max-width: 768px) {
    padding-left:0;
    text-align:center;
    font-size:1.1rem;
}   
`
const SectionContainer = styled.div`
    display:flex;
    margin:auto;
    width:90%;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    @media only screen and (max-width: 768px) {
        width:100%;
        flex-direction:column;
    }
`

const Subtitle = styled.h2`
  font-size:1.4rem;
  text-align:center;
  font-family: 'PT Sans', 'sans-serif';
  font-weight:600;
  padding-bottom:0;
  margin-bottom:0;
  color:black;
  @media only screen and (max-width: 768px) {
    font-size:1.25rem;
}   
`

const Section = styled.div`
    display:flex;
    width:40%;
    flex-direction:column;
    align-items:center;
    padding:0rem;
    padding-bottom:0;
    @media only screen and (max-width: 768px) {
        width:75%;
    }
`
const Text = styled.p`
    font-size:1rem;
    font-family: 'PT Mono', 'sans-serif';
    text-align:Center;
    @media only screen and (max-width: 768px) {
    font-size:0.95rem;
}   
`
const Image = styled.img`
    width:${props=> props.imageWidth ? `${props.imageWidth}rem` : '15rem'};
    display: block;
    margin-left:auto;
    padding-top:0;
    opacity:0.5;
`

const LocationBox = (props) => {
    return (
        <div>
            <Wrapper>
                <City>{props.city}</City>
                <Address>{props.address}</Address>
                <SectionContainer>
                    <Section>
                        <Subtitle>{props.sub1}</Subtitle>
                        {props.text1 && <Text>
                            Mon: 7:00-11:00pm <br/>
                            Tue: 7:00-11:00pm <br/>
                            Wed: 7:00-11:00pm <br/>
                            Thu: 7:00-12:00am <br/>
                            Fri: 7:00pm-12:00am <br/>
                            Sat: 7:00-12:00am <br/>
                            Sun: CLOSED
                        </Text>}
                    </Section>
                    <Section>
                        <Subtitle>{props.sub2}</Subtitle>
                        <Text>{props.text2}
                        </Text>
                    </Section>
                </SectionContainer>
                <Image src={props.image} imageWidth={props.imageWidth}/>
            </Wrapper>
        </div>
    )
}

export default LocationBox
