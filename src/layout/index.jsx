import React, { useEffect } from "react"
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-components";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <Wrap>
      <Header />
      {children}
      <Footer />
    </Wrap>
  )
}

export default Layout;

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;

  ${props => props.theme.window.mobile} {
    padding-top: 55px;
  }
`;


