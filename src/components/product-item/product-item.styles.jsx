import styled from "styled-components";

import { Image as image } from "../product-card/product-card.styles";


export const Description = styled.p`
    line-height:25px;
    margin-bottom: 10px;
   
`;

export const Image = styled(image)`
    height:100%;
    border:none;
    @media screen and (max-width:800px){
          height:300px;
        }
`

export const ImageContainer = styled.div`
    height:100%;
    width:50%;
      @media screen and (max-width:800px){
          height:400px;
           width:100%;
        }
`;

export const InfoContainer = styled.div`
    width: 50%;
    height:100%;
    margin-left:100px;
    display:flex;
    flex-direction:column;

    @media screen and (max-width:800px){
        margin:0;
         width: 100%;
        }
  
`;

export const Label = styled.label`
color:black;
font-size:20px;
border:2px solid black;
border-radius: 5px;
padding:10px 25px;
cursor:pointer;
`;

export const Price = styled.span`
font-size: 25px;
`;


export const ProductItemContainer = styled.div`
    display:flex;
    width:100%;
    height:610px;
    justify-content:space-between;
    align-items:center;
    padding:0 100px;
    background-color: #f7f7f7; 
    
    
       @media screen and (max-width:800px){
            flex-direction:column;
            height:fit-content;
              align-items:flex-start;
              padding:10px;
        }
`
export const RadioButton = styled.input`  
 display:none;

   &:checked + Label {
        background-color:black;
        color:white;
    }

`;

export const Select = styled.span`
    font-size:1.25rem;
`;


export const SizeContainer = styled.div`
  display:grid;
   grid-template-columns: repeat(5,1fr);
   column-gap:10px;
   row-gap:15px;
   margin:10px 0 20px 0;

        @media screen and (max-width:800px){
            grid-template-columns: repeat(3,1fr);
        }
`;






export const SizesContainer = styled.div`
 
`;
