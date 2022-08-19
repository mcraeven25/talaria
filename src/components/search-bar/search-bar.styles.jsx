import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InputContainer = styled.div`
    background-color:white;
    border:1px solid black;
    border-radius:5px;
    width: 300px;
    height:40px;
    padding:6px;
    margin-top:10px;
 
    

     @media screen and (max-width:800px){
            width: 95%;
            left:5px;
            position:absolute;
            bottom:-50px;
            
        }

`;

export const Icon = styled(FontAwesomeIcon)`
  color:black;
`;


export const Input = styled.input`
  outline:none;
  border:none;
  height:100%;
  font-size:20px;
  padding-left:5px;
`;
