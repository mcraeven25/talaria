import styled from "styled-components";

import { Image } from "../product-card/product-card.styles";

export const CarouselItemContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;

     @media screen and (max-width:800px){
            
           
           
        }
    
`;
export const Container = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    border: 2px solid black;
    /* border-left: 1px solid black;
    border-right: 2px solid black; */
    
`;

export const InfoContainer = styled.div`
    width:50%;
    height:100%;
    background-color: #f7f7f7;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

      @media screen and (max-width:800px){
            padding-left:10px;
           
           
        }
`;

export const ImageContainer = styled(Image)`
    border:none;
    height:100%;
`;

export const Header = styled.span`
    text-align:center;
    font-size: 40px;
    font-weight:bold;
    margin-bottom:20px;
    
    @media screen and (max-width:800px){
            
             font-size: 20px;
           
        }
`;



