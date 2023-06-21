import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleModal } from "../../actions";
import { Fragment } from "react";
import CartImg from "../../assets/shared/desktop/icon-cart.svg";
import { Outlet } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import {
  NavigationContainer,
  LogoContainer,
  LogoImg,
  HeaderWrapper,
  HeaderNav,
  HeaderNavLink,
  MobNav,
  MobNavWrapper,
  CartWrapper,
  CartIcon,
} from "./navigation.style";
import Logo from "../../assets/shared/desktop/logo.svg";
import useWindowScroll from "../../hooks/useWindowScroll";
import useWindowSize from "../../hooks/useWindowSize";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { RootState } from "../../store/store";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemAmount = useSelector(
    (state: RootState) => state.products.cartItems.length
  );
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  const dispatch = useDispatch();
  const SCROLL = useWindowScroll();
  const SIZE = useWindowSize();
  const isMobile = SIZE?.width ? SIZE.width < 768 : false;
  const isScrolled = SCROLL?.height ? SCROLL?.height >= 390 : false;
  useEffect(() => {
    isOpen ? disableBodyScroll(document) : enableBodyScroll(document);
  }, [isOpen]);

  return (
    <Fragment>
      <NavigationContainer bgColor={isHomePage} data-scrolled={isScrolled}>
        <HeaderWrapper borderBot={true}>
          <LogoContainer to="/">
            <LogoImg src={Logo} alt="audiophile logo" />
          </LogoContainer>
          <HeaderNav>
            <HeaderNavLink
              to="/"
              data-active="active"
              //   Aria is page
              aria-current="page"
            >
              home
            </HeaderNavLink>
            <HeaderNavLink
              to="/headphones"
              exact="true"
              data-active="active"
              aria-current="page"
            >
              headphones
            </HeaderNavLink>
            <HeaderNavLink
              to="/speakers"
              exact="true"
              data-active="active"
              aria-current="page"
            >
              speakers
            </HeaderNavLink>
            <HeaderNavLink
              to="/earphones"
              exact="true"
              data-active="active"
              aria-current="page"
            >
              earphones
            </HeaderNavLink>
          </HeaderNav>
          {isMobile && (
            <MobNavWrapper
              data-open={isOpen}
              data-scrolled={isScrolled}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MobNav data-open={isOpen}>{/* <ProductNav /> */}</MobNav>
            </MobNavWrapper>
          )}
          <CartWrapper
            aria-label="button triggers shopping cart modal"
            id="cart_button"
            data-amount={itemAmount}
            onClick={() => dispatch(toggleModal())}
            aria-haspopup="true"
            aria-controls="cart_modal"
          >
            <CartIcon src={CartImg} />
          </CartWrapper>
        </HeaderWrapper>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
