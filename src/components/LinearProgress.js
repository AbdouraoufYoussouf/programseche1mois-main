import styled from 'styled-components'
import React from 'react'

export const LinearProgress = ({widthL,widthP,title}) => {
  return (
    <LinearProgres widthL={widthL}>
      <Progress widthP={widthP}/>
        <Content>{title}</Content>
    </LinearProgres>
  )
}


const LinearProgres = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.widthL || '100%'};
  height:  ${props => props.heightL || '35px'};
  border-radius: 15px;
  background-color: gray;
    @media screen and (max-width:945px) {
    
    }
`;
const Progress = styled.div`
  justify-content: center;
  width: ${props => props.widthP};
  height:  ${props => props.heightP || '35px'};
  border-radius: 15px;
  background-color: blueviolet;
    position: absolute;
    left: 0;
    border-radius: 15px;
`;
const Content = styled.p`
  font-size: 22px;
  z-index: 1;
  text-align: center;
  font-weight: bold;
`;