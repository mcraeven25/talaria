import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;

     @media screen and (max-width:800px){
            grid-template-columns: repeat(1, 1fr);
            display:grid;
            padding:0;
          
           
        }
`;

export const Home = styled.div`
padding: 0 20px;
`;
