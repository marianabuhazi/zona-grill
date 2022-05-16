import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    width:13rem;
    height:11.5rem;
    object-fit:cover;
    @media only screen and (max-width: 768px) {
        width:10rem;
        height:8.5rem;
    }
`

const Card = styled.div`
    position:relative;
    bottom:9rem;
    width:13rem;
    padding-top:1rem;
    padding-left:0.8rem;
    padding-right:0.8rem;
    padding-bottom:0.5rem;
    background-color:#fcfeff;
    border-radius:3px;
    box-shadow:3px 3px rgb(0 0 0 / 0.2);
    margin:1rem;
    @media only screen and (max-width: 768px) {
        width:10rem;
    }
`

const Name = styled.h1`
    font-size:1.7rem;
    text-align:center;
    margin-bottom:0;
    margin-top:0.4rem;
    font-family: 'Caveat', 'cursive';
    font-weight:400;  
`

const Position = styled.h2`
    font-size:0.8rem;    
    margin-top:0.4rem;
    text-align:center;
    font-family: 'PT Mono', sans-serif;
    font-weight:400;
`

const CelebrityCard = (props) => {
    return (
        <div>
            <Card>
                <Image src={props.image}/>
                <Name>{props.name}</Name>
                <Position>{props.position}</Position>
            </Card>
        </div>
    )
}

export default CelebrityCard
