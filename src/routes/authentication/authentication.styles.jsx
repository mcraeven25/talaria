import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  margin: 50px auto;

    @media screen and (max-width:800px){
           flex-direction:column;
            padding:20px;
        }
`;
