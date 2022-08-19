import styled from "styled-components";
import { Link } from "react-router-dom";

export const BrandPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  cursor: pointer;
  color: black;

     @media screen and (max-width:800px){   
    
      margin-left:5px;

          }
`;

export const Preview = styled.div`
  display:flex;
  padding: 0 10px;
  flex-direction:column;
`;


