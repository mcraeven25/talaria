import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  padding: 10px 20px;
  width: 70px;
  margin-left: 10px;
  height: 100%;
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;
export const Navlink = styled(Link)`
  padding: 5px 15px;
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;
