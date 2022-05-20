import React from 'react';
import styled from 'styled-components'
import cachapa from '../../images/Menu/cachapa.JPG'
import hotdog from '../../images/Menu/hotdog.JPG'
import tequenos from '../../images/Menu/tequenos.JPG'
import patacon from '../../images/Menu/patacon.JPG'
import pepito from '../../images/Menu/pepito.JPG'
import mechada from '../../images/Menu/mechada.JPG'
import reina from '../../images/Menu/reinapepia.JPG'
import cheese from '../../images/Menu/cheese.JPG'
import brutal from '../../images/Menu/brutal.JPG'
import doble from '../../images/Menu/doble.JPG'
import caraquena from '../../images/Menu/caraquena.JPG'
import catira from '../../images/Menu/catira.JPG'
import pelua from '../../images/Menu/pelua.JPG'
import sifrina from '../../images/Menu/sifrina.JPG'
import peluavieja from '../../images/Menu/pelua-vieja.JPG'
import catiravieja from '../../images/Menu/catira-vieja.JPG'

const Card = styled.div`
  display:flex;
  flex-direction:column;
  background-color:white;
  width:16rem;
  height:20rem;
  margin:1rem;
  @media only screen and (max-width: 425px) {
    width:100%;
    height:18rem;
  }
`
const ImageDiv = styled.div`
  height:40%;
`
const Image = styled.img`
  display:block;
  width:auto;
  height:100%;
  margin:auto;
  object-fit:cover;
  padding:1rem;
  border-radius:50%;
`
const Name= styled.h1`
  font-family:'PT Sans', sans-serif;
  font-size:1.2rem;
  text-align:center;
`

const Text= styled.div`
  height:60%;
  padding:1rem 1.2rem 0.5rem 1.2rem;
  margin:0;
 font-family:'PT Sans', sans-serif;
`

const Description= styled.h2`
  font-size:0.85rem;
  font-weight:400;
`
const Price= styled.span`
  font-size:0.9rem;
  color:red;
  padding:0.5rem;
`


const ItemCard = ({item}) => {
  const imgArr= {'cachapa':cachapa, 'hotdog':hotdog, 'tequenos':tequenos, 'patacon':patacon, 
  'pepito':pepito, 'mechada': mechada, 'reina':reina, 'cheese':cheese, 'brutal':brutal, 'doble':doble, 
  'caraquena':caraquena, 'catira':catira, 'pelua':pelua, 'sifrina':sifrina, 'peluavieja':peluavieja, 'catiravieja':catiravieja}

  let source = imgArr[item.src];
  
  return <Card>
    <ImageDiv>
      <Image src={source} alt="Food"/>
    </ImageDiv>
    <Text>
      <Name>
      {item.name}
      </Name>
      <Description>
      {item.desc}  
      <Price>
      {item.price}
      </Price>
      </Description>
    </Text>
  </Card>;
};

export default ItemCard;
