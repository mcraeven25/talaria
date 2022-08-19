import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 18px;
  align-items: center;
  
`;
export const DetailsContainer = styled.div`
display:flex;
flex-direction:column;  
margin-left: 20px;
justify-content:space-between;

`;


export const ImageContainer = styled.div`
    width: 20%;
    padding-right: 15px;
     @media screen and (max-width:800px){
          width: 60%;
        }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;

    
`;

 
export const Details = styled.span`
 width:100%;
 

`;



export const Quantity = styled.span`
   width: 20%;
   display: flex;

`;
  
  
export const Arrow = styled.div`
 cursor: pointer;
 font-size: 1.75rem;

`;

export const Value = styled.div`
 margin: 10px 10px;
`;

export const ProductContainer = styled.div`
  display:flex;
 
`;

