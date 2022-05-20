import React from 'react';
import styled from 'styled-components'
import cachapa from '../../images/cachapa.JPG'
import hotdog from '../../images/hotdog.JPG'
import tequenos from '../../images/tequenos.JPG'
import patacon from '../../images/patacon.JPG'
import pepito from '../../images/pepito.JPG'
import mechada from '../../images/mechada.JPG'
import reina from '../../images/reinapepia.JPG'
import cheese from '../../images/cheese.JPG'
import brutal from '../../images/brutal.JPG'
import doble from '../../images/doble.JPG'
import caraquena from '../../images/caraquena.JPG'
import catira from '../../images/catira.JPG'
import pelua from '../../images/pelua.JPG'
import sifrina from '../../images/sifrina.JPG'
import peluavieja from '../../images/pelua-vieja.JPG'
import catiravieja from '../../images/catira-vieja.JPG'

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
  const imgArr= {'cachapa':cachapa, 'hotdog':hotdog, 'tequenos':tequenos, 'patacon':patacon, 'pepito':pepito, 'mechada': mechada, 'reina':reina, 'cheese':cheese, 'brutal':brutal, 'doble':doble, 'caraquena':caraquena, 'catira':catira, 'pelua':pelua, 'sifrina':sifrina, 'peluavieja':peluavieja, 'catiravieja':catiravieja}
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
