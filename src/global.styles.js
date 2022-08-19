import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin:0;

        @media screen and (max-width:800px){
            padding:0;
           
        }
    }
`;
