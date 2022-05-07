import styled from 'styled-components'

export const NavBare = styled.div`
   // background-color: #282c34;
   background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); 
   width: 100%;
    height: 60px; 
    position: sticky;
   top: 0;
   z-index: 100;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    
`;
export const Left = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    margin-bottom: 28px;
    h1{
        color: white;
        padding-bottom: 10px;
    }
`;
export const Right = styled.div`
    
    width: 300px;
    ul{
        display: flex;
        justify-content: space-around;
    }
    .actived{
    color: #1888ff;
    font-size: 20px;
    text-decoration: none;
  }
  .actived:hover{
    color: white;
  }
  .navlink {
    color: white;
    text-transform: capitalize;
    text-decoration: none;
    width: 100px;
    font-size: 20px;
  }
  .navlink:hover {
    color: white;
  }
`;