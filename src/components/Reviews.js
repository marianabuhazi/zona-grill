import React from 'react'
import styled from 'styled-components'
import reviews from "../images/reviews.png"
import thermofisher from "../images/thermofisher.png"
import telemundo from "../images/telemundo.png"
import banda from "../images/banda.png"
import cinemat from "../images/cinemat.png"
import reviewsList from "../components/ReviewsList.js"

const Header = styled.h1`
    position:relative;
    text-align:center;
    font-family: 'Sarala', sans-serif;
    top:-10rem;
    font-size:2.7rem;
    text-align:center;
    @media only screen and (max-width: 768px) {
        font-size:2rem;
        margin-left:0rem;
        text-align:center;
    }
    @media only screen and (max-width: 320px) {
        font-size:1.7rem;
        margin-left:0rem;
        text-align:center;
    }
    @media only screen and (min-width: 1800px) {
        font-size:3.5rem;
    }
`

const Header2 = styled.h1`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    position:relative;
    top:-10rem;
    font-family: 'Sarala', sans-serif;
    font-size:1.7rem;
    padding-top:0;
    margin-left:3rem;
    @media only screen and (max-width: 768px) {
        margin-left:0rem;
        margin-top:2rem;
        justify-content:center;
        font-size:1.2rem;
    }
    @media only screen and (max-width: 320px) {
        font-size:1rem;
    }
    @media only screen and (min-width: 1800px) {
        font-size:2.7rem;
    }
`
const Header3 = styled.h1`
    font-family: 'Sarala', sans-serif;
    font-size:2rem;
    padding-top:0;
    margin-left:3rem;
    text-align:center;
    @media only screen and (max-width: 768px) {
        margin:1rem;
        text-align:center;
        font-size:1.3rem;
    }
    @media only screen and (max-width: 320px) {
        font-size:1.1rem;
    }
    @media only screen and (min-width: 1800px) {
        font-size:2.7rem;
    }
`

const Span = styled.span`
    font-family: 'Sarala', sans-serif;
    color:#FF8B02;
    text-decoration:underline;
`

const Image = styled.img`
    display: block;
    position:relative;
    bottom:11rem;
    width:10rem;
    margin: auto;
    @media only screen and (max-width: 768px) {
        text-align:center;
        width:8rem;
        margin-top:1rem;
    }
`
const Rectangle = styled.div`
    overflow-y: scroll; /* Show vertical scrollbar */
    background-color:#D3D3D3;
    position:relative;
    bottom:8rem;
    display: flex;
    flex-direction:column;
    padding:1.5rem;
    margin:2rem;
    margin-bottom:0;
    height:23rem;
    /* border-radius:5px; */
    box-shadow: 3.5px 1px rgb(0 0 0 /0.4);
    @media only screen and (max-width: 768px) {
        padding:1rem;
        margin:1rem;
        margin-top:0rem;
        box-shadow: none;
    }
`

const Review = styled.p`
    background-color: white;
    font-family: 'PT Mono', monospace;
    font-size:1rem;
    padding:1rem;
    margin:0.5rem;
    /* border-radius:15px; */
    @media only screen and (max-width: 768px) {
        font-size:0.8rem;
    }
`

const Question = styled.p`
    position:relative;
    bottom:5rem;
    margin-left:1rem;
    margin-right:1rem;
    font-family: 'PT Mono', monospace;
    font-size:1rem;
    text-align:Center;
    @media only screen and (max-width: 768px) {
        bottom:6.5rem;
    }
`
const Btn = styled.a`
    width:8rem;
    position: relative;
    bottom:4.5rem;
    color:#3B2313;
    padding:0.6rem 0.8rem 0.6rem 0.8rem;
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
    @media only screen and (max-width: 768px) {
        bottom:6rem;
    }
    @media only screen and (min-width: 1800px) {
        width:5.8rem;
        font-size:1.2rem;
    }
`
const Divisor = styled.hr`
    position:relative;
    bottom:2rem;
`

const CorporateLogos = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    margin-bottom:5rem;
`
const Logo = styled.img`
    width:12rem;
    margin:1.5rem;
    @media only screen and (max-width: 768px) {
        width:9rem;
        margin:1rem;
    }
`


const reviewItems = reviewsList;

const Reviews = () => {
    return (
        <div>
            <Header>Customer Reviews</Header>
            <Image src={reviews}/>
            <Rectangle>
                {reviewItems.map((review) =>
                    <Review>"{review}"</Review>
                )
                }
            </Rectangle>
            <Question>Loved your experience at Zona Grill?</Question>
            <Btn href="https://g.page/r/CccObVU3nh3nEB0/review">START REVIEW</Btn>
            <Divisor/>
            <Header3>Corporate Clients</Header3>
            <CorporateLogos>
                <Logo src={cinemat}/>
                <Logo src={thermofisher}/>
                <Logo src={banda}/>
                <Logo src={telemundo}/>
            </CorporateLogos>
        </div>
    )
}

export default Reviews
