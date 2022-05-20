import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
    width:40%;
    position: relative;
    top:-8rem;
    color:#3B2313;
    padding:0.5rem 0.8rem 0.5rem 0.8rem;
    font-size:1rem;
    font-family: 'Sarala', sans-serif;
    text-align: center;
    border:solid 3px #F79521;
    font-weight:600;
    text-decoration:none;
    background-color:white;
    display:block;
    margin-top:3vh;
    margin-left:auto;
    margin-right:auto;
    &:hover{
        box-shadow:0px 0px 0px 1px #F79521 inset;
        transition: box-shadow 0.2s ease-in-out;
    }
    @media only screen and (min-width: 425px) {
        display:none;
    }
`

const TransparentBtn = () => {
    return (
        <div>
            <Btn href="https://zona-grill-inc.square.site/">ORDER ONLINE</Btn>
        </div>
    )
}

export default TransparentBtn
