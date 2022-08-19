import styled from "styled-components";

export const BrandContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin-bottom: 50px;

   @media screen and (max-width:800px){   
        grid-template-columns: repeat(2, 1fr);
           padding:20px;
      }
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 25px;
  text-align: center;

     @media screen and (max-width:800px){   
       margin-top:50px;
      }
`;
