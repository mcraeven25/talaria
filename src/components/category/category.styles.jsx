import styled from "styled-components";

import { Name } from "../product-card/product-card.styles";


export const CategoryContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:20px;


`;

export const Preview = styled.div`
  display: flex;

    @media screen and (max-width:800px){
         
            margin-bottom:100px;
             @media screen and (max-width:800px){
           display:grid;
           grid-template-columns: repeat(2,1fr);
           gap:80px 10px;
           
        }
           
        }
`;
 

styled(Name)`
  display:none;
`