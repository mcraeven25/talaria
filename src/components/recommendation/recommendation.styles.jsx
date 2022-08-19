import styled from "styled-components";

export const RecommendationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;  
    margin-bottom:50px;

      @media screen and (max-width:800px){
            grid-template-columns: repeat(2, 1fr);
            row-gap: 100px;  
           
        }

`;
