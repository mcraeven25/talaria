import styled from "styled-components";

export const BackGroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: 240px auto;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BrandContainer = styled.div`
  height: 240px;
  min-width: 30%;
  max-width: 40%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7.5px 15px;
  flex: 1 1 auto;

  &:hover {
    cursor: pointer;
  }
`;
