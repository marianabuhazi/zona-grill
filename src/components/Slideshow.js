/*BEFORE IMPORTING IMAGES INTO ARRAY, crop to Youtuve Cover size*/
import React, {useState} from 'react'
import styled from 'styled-components'
import test1 from "../images/test1.jpg"
import test2 from "../images/test2.jpg"
import test3 from "../images/test3.jpg"
import test4 from "../images/test4.jpg"
import Slide from "../components/Slide.js"

const ArrowRight = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.75rem;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right:5%;
  top:50%;
  z-index: 1;
  position:absolute;
  &:hover{
    cursor:pointer;
    box-shadow: 2px 2px rgb(0 0 0 / 0.3);
    padding: 0.8rem;
  }
`
const ArrowLeft = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.75rem;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left:5%;
  top:50%;
  z-index: 1;
  position:absolute;
  &:hover{
    cursor:pointer;
    box-shadow: 2px 2px rgb(0 0 0 / 0.3);
    padding: 0.8rem;
  }
`
const Slogan = styled.div`
  position:absolute;
  background-color:#3B2313;
  padding:1rem;
  opacity:0.86;
  color:white;
  top:80%;
  text-align:center;
  font-size:1.8rem;
  font-family: 'PT Sans', sans-serif;
  font-weight:600;
  @media only screen and (max-width: 768px) {
    width:100%;
    padding-left:0rem;
    padding-right:0rem;
    font-size:1.6rem;
  }
  @media only screen and (max-width: 320px) {
    font-size:1.4rem;
  }
`


const Slideshow = () => {
    const images = [test1,test2, test3, test4];
    const text = ["Zona Grill is.","Caraqueñas are.", "Tequeños are.", "Patacones are."];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () =>{
        if(currentSlide<images.length-1){
            let nextSlideIndex= currentSlide+1;
            setCurrentSlide(nextSlideIndex);
        }
        else { setCurrentSlide(0); } 
    }
    const previousSlide = () =>{
        if(currentSlide>0){
            let nextSlideIndex= currentSlide-1;
            setCurrentSlide(nextSlideIndex);
        }
        else { setCurrentSlide(images.length-1); } 
    }
    return (
        <div>
            <Slide src={images[currentSlide]}/>
            <ArrowRight onClick={nextSlide}/>
            <ArrowLeft onClick={previousSlide}/>
            <Slogan>Home is where {text[currentSlide]}</Slogan>
        </div>
    )
}

export default Slideshow
