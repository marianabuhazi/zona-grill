import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
    width:4.5rem;
    position: relative;
    color:#3B2313;
    padding:0.5rem 0.8rem 0.5rem 0.8rem;
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
    @media only screen and (min-width: 1800px) {
        width:5.8rem;
        font-size:1.2rem;
    }
`

const TransparentBtn = () => {
    return (
        <div>
            <Btn href="/hours-location">VISIT US</Btn>
        </div>
    )
}

export default TransparentBtn
