/*BEFORE IMPORTING IMAGES INTO ARRAY, crop to Youtuve Cover size*/
import React, {useState} from 'react'
import styled from 'styled-components'
import brutal from '../images/Home/brutalPrep.JPG'
import arepas from "../images/Home/arepas.jpg"
import customers1 from "../images/Home/customers1.jpg"
import burgerassemble from "../images/Home/burger-assemble.JPG"
import workers from "../images/Home/workers.jpeg"
import shirt from "../images/Home/shirt.jpeg"
import cachapa from "../images/Home/cachapa-llanera.jpeg"
import foodtruck from "../images/Home/food-truck.jpeg"
import Slide from "../components/Slide.js"
import Button from "../components/TransparentBtn.js"

const ArrowRight = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.6rem;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right:5%;
  top:50%;
  z-index: 1;
  position:absolute;
  &:hover{
    cursor:pointer;
    box-shadow: 2px 2px rgb(0 0 0 / 0.3);
    padding: 0.65rem;
  }
`
const ArrowLeft = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.6rem;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left:5%;
  top:50%;
  z-index: 1;
  position:absolute;
  &:hover{
    cursor:pointer;
    box-shadow: 2px 2px rgb(0 0 0 / 0.3);
    padding: 0.65rem;
  }
`

const Slideshow = () => {
    const images = [brutal, workers, shirt, burgerassemble, foodtruck, cachapa, customers1, arepas];
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

    // const automatic = () =>{
    //   setTimeout(nextSlide, 3500);
    // }
    // automatic();

    return (
        <div>
            <Slide src={images[currentSlide]}/>
            <ArrowRight onClick={nextSlide}/>
            <ArrowLeft onClick={previousSlide}/>
            <Button/>
        </div>
    )
}

export default Slideshow
