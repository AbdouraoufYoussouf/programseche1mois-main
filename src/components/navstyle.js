import styled from 'styled-components'


export const NavbarCont = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around ;
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); 
   
    @media screen and (max-width:945px) {
      justify-content: space-between;
      

    }
`;
export const Left = styled.div`
  
    span{
        color: white;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
    }
    @media screen and (max-width:945px) {
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
    }
    @media screen and (max-width:505px) {
      span{
        text-align: center;
        font-size: 30px;
        
    }
    }
`;
export const Right = styled.div`
  .actived{
    color: #1888ff;
    font-size: 20px;
    text-decoration: none; 
    width: 100px;
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
    color: gray;
  }
  
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  li{
    list-style: none;
    margin-right: 20px;
  }
  @media screen and (max-width:945px) {
    display: ${props => props.display};;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 20px;

    li{
      list-style: none;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
`;
export const MenuIcon = styled.div`
   display: none;
   width: 30px;
   margin-right: -10px;
   align-self: center;

   @media screen and (max-width:945px) {
     display: flex;
     align-items: center;
     justify-content: center;
      display: block;
      position: absolute;
      top: -5px;
      right: 0;
      transform: translate(-100%, 60%);
      cursor: pointer;
    }
`;
export const ContainerModal = styled.div`
 
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);  
   //background-color: red;
   position: absolute;
   top: 60px;
`;
export const Madal = styled.div`
   border-bottom-right-radius: 25px;
   border-bottom-left-radius: 25px;
   width: 100%;
   height: 100px;
   background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%); 
   position: absolute;
   right: 0;
   top: 0px;
   
`;
