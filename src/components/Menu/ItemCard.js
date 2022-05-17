import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  display:flex;
  flex-direction:column;
  background-color:white;
  width:16rem;
  height:20rem;
  margin:1rem;
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



const ItemCard = ({item, image}) => {
  return <Card>
    <ImageDiv>
      <Image src={image}/>
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
