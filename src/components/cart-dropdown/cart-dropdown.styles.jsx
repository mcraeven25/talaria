import styled from 'styled-components';
import {BaseButton,InvertedButton,GoogleSignInButton} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${InvertedButton},
  ${GoogleSignInButton}{
    margin-top:auto;
  }
`;


export const CartItems = styled.div`
    height:500px;
    display: flex;
    flex-direction: column;
    overflow-y:scroll 
`;


export const EmptyMessage = styled.span`
font-size: 2rem;
margin:200px auto;
`;




 
