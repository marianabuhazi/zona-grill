import React, {useState} from 'react'
import styled from 'styled-components'

const Image = styled.img`
    height:15rem;
    object-fit:cover;
    width:15rem;
    opacity:0.5;
    @media only screen and (max-width: 1000px) {
        height:13rem;
        width:13rem;
    }
    @media only screen and (min-width: 1800px) {
        height:21rem;
        width:21rem;
    }
    z-index:3;
    &:hover{
        cursor:pointer;
    }
`
const CenterImage = styled.img`
    height:17rem;
    object-fit:cover;
    width:17rem;
    @media only screen and (max-width: 1000px) {
        height:14rem;
        width:14rem;
    }
    @media only screen and (min-width: 1800px) {
        height:23rem;
        width:23rem;
    }
    z-index:3;
    &:hover{
        cursor:pointer;
    }
`
const ImageCarousel = styled.div`
    width:78%;
    padding:1rem;
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    margin:auto;
    margin-top:0.5rem;
    align-items:center;
    @media only screen and (max-width: 768px) {
        display:none;
    }
    background-color:none;
    z-index:3;
`
const ImageMobile = styled.img`
    height:14rem;
    object-fit:cover;
    width:14rem;
    @media only screen and (max-width: 320px) {
        height:12rem;
        width:12rem;
    }
    box-shadow: 30rem, 30rem, black;
    z-index:3;
`
const ImageCarouselMobile = styled.div`
    width:100%;
    padding-top:1rem;
    padding-bottom:1rem;
    background-color:none;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-around;
    margin:auto;
    margin-top:0.3rem;
    @media only screen and (min-width: 769px) {
        display:none;
    }
    z-index:2;
`

const Arrow = styled.button`
    color: black;
    font-size:2.2rem;
    border:none;
    background-color:#fff5eb;
    font-family: 'Nanum Myeongjo', serif;
    &:hover{
        cursor:pointer;
    }
    @media only screen and (min-width: 1500px) {
        font-size:3rem;
    }
    @media only screen and (max-width: 500px) {
        font-size:1.5rem;
    }
    z-index:3;
`

const Current = styled.h1`
    display:block;
    color: black;
    width:3rem;
    padding:5px;
    margin:auto;
    opacity:0.5;
    margin-top:1.4rem;
    text-align:center;
    font-size:1.3rem;
    border: solid black 1px;
`

const Gallery = (props) => {
    const images = props.images;
    const links = props.links;
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
            <ImageCarousel> 
                <Arrow onClick={previousSlide} left>&lt;</Arrow>
                <Image onClick={previousSlide} src={images[((currentSlide-1)+images.length)%images.length]}/>
                <a target="_blank" rel="noopener noreferrer" href={links[(currentSlide)%images.length]}><CenterImage src={images[(currentSlide)%images.length]}/></a>
                <Image onClick={nextSlide} src={images[(currentSlide+1)%images.length]}/>
                <Arrow onClick={nextSlide}>&gt;</Arrow>
            </ImageCarousel>
            <ImageCarouselMobile>
                <Arrow onClick={previousSlide} left>&lt;</Arrow>
                <a target="_blank" rel="noopener noreferrer" href={links[(currentSlide)%images.length]}><ImageMobile src={images[currentSlide]}/></a>
                <Arrow onClick={nextSlide}>&gt;</Arrow>
            </ImageCarouselMobile>
            <Current>{currentSlide + 1}/{images.length}</Current>
        </div>
    )
}

export default Gallery
