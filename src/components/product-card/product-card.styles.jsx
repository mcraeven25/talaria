import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: scale-down;
  margin-bottom: 5px;
  border: 1px solid black;
  background-color: #f7f7f7;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  font-size: 1rem;
  padding-right: 20px;
  padding-left: 5px;
  flex-direction: column;
`;

export const Name = styled.span`
  width: 100%;
`;

export const Price = styled.span`
  width: 10%;
`;
