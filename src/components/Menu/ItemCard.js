import React from 'react';
import styled from 'styled-components'
import DobleCar from '../../images/Menu/doubleBurgers.png'

const Card = styled.div`
  position: absolute;
  top: 20rem;
  display:flex;
  flex-direction:row;
  background-color:white;
  padding:0;
  margin:0;
  width:min-content;
`
const Image = styled.img`
  width:15rem;
  height:15rem;
  object-fit:cover;
  padding:1rem;
`
const Name= styled.h1`
font-size:1.8rem;
`

const Text= styled.div`
  padding:2rem;
  margin:0;
 font-family:'PT Sans', sans-serif;
`

const Description= styled.h2`
  font-size:1.1rem;
  font-weight:400;
`
const Price= styled.h2`
  font-size:1rem;
  color:red;
`



const ItemCard = () => {
  return <Card>
    <Image src={DobleCar}/>
    <Text>
      <Name>
        Caraqueña Doble
      </Name>
      <Description>
      Two choices of beef patty, grilled chicken or grilled pork. Contains: ham, American cheese, bacon, 
      fried egg, cole, potato sticks, Zona Grill sauce and Ketchup. 
      </Description>
      <Price>
        $12
      </Price>
    </Text>
  </Card>;
};

export default ItemCard;
