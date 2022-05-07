import React from 'react'
import styled from 'styled-components'

function Card(props) {

    return (
        <CardCont>
            <CardHeader>
                <ImageContent src={props.imag} />
            </CardHeader>
            <CardFooter>
                <h2>{props.titre}</h2>
                <LesButtons>    
                    <p>{props.categorie}</p>    
                    <Button >lire plus</Button>    
                </LesButtons>
            </CardFooter>
        </CardCont>
    )
}

export default Card

const CardCont = styled.div`
    background-color: wheat;
    width: 280px;
    height: 320px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width:1200px) {
        width: 250px;
        height: auto;
    }
`;
const CardHeader = styled.div`
    height: 200px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;
const ImageContent = styled.img`
   max-width: 100%;
   max-height: 'auto';
   border-radius: 5px 5px 0px 0px;

`;
const CardFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    height: 120px;
    h2{
        margin-top: 20px;
        text-align: center;
        font-size:20px;
        font-weight:700;
        color: blue;
        max-height:90px;
        max-height: 100px;
    }

    @media screen and (max-width:1180px) {
         h2{
        margin: 5px;
        }
       p {
            max-height: 3.6em; /* (Number of lines you want visible) * (line-height) */
        }
  }
`;

const LesButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    flex-direction: row;
    width: 90%;
    position:absolute;
    bottom: 0;
    p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 16px;
        font-style: italic;
        font-weight: 600;
        text-transform: uppercase;
    }
`;
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: blue;
    width: 40%;
    font-size: 16px;
    color: white;
    background-color: orange;
    border: none;
    margin-bottom: 2px;
    cursor: pointer;
`;
// image content 

