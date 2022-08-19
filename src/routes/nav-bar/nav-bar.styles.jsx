import styled from "styled-components";
import { ReactComponent as NavLogo } from "../../assets/sneakers-shoes-svgrepo-com.svg";

import { Link } from "react-router-dom";

export const NavLogos = styled(NavLogo)`
  height:100px;
  margin-top: -20px;
   @media screen and (max-width:760px){
            height:70px;

        }
`;


export const NavBarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  margin-bottom: 25px;
 	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        position:relative;
  color:white;
  @media screen and (max-width:800px){
         
            
        }

`;
export const LogoContainer = styled(Link)`
  padding: 0 20px;
  width: 70px;
  height: 100%;

       @media screen and (max-width:800px){
            width: 100px;
            padding: 20px 5px;
        }
 
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
   color:black;

         @media screen and (max-width:800px){
            justify-content: flex-end;
              padding:13px 0;
        }
`;
export const Navlink = styled(Link)`
  padding: 5px 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.7rem;
  color:black;
   @media screen and (max-width:800px){
            padding:13px 10px;
            font-size: 1rem;
        }
`;

export const SearchBarContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 100px;
  padding: 2px 0;
  
`;
