import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: 850px;
  display:block;
  margin:auto;
  object-fit:cover;
  @media only screen and (max-height: 768px) {
    height: 700px;
  }
  @media only screen and (min-height: 1000px) {
    height: 1050px;
  }
  @media only screen and (min-height: 1300px) {
    height: 1350px;
  }
`

const Slide = ({src}) => {
    return (
        <Image src={src}/>
    )
}

export default Slide
