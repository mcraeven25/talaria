import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIscartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as NavLogo } from "../../assets/sneakers-shoes-svgrepo-com.svg";

import { signOutStart } from "../../store/user/user.action";



import {
  NavBarContainer,
  LogoContainer,
  NavLinksContainer,
  Navlink,
} from "./nav-bar.styles";


const NavBar = () => {

  const dispatch = useDispatch()

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIscartOpen)
  
  const signOutUser = () => dispatch(signOutStart())

  return (
    <>
      <NavBarContainer>
        <LogoContainer to="/">
          <NavLogo style={{ transform: "scale(3)" }} />
        </LogoContainer>
        <NavLinksContainer>
          <Navlink to="/shop">Shop</Navlink>
          {currentUser ? (
            <Navlink as="span" onClick={signOutUser}>
              Sign Out
            </Navlink>
          ) : (
            <Navlink to="/authentication">Sign In</Navlink>
          )}
          <CartIcon />
        </NavLinksContainer>
          {isCartOpen && <CartDropDown />}
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
