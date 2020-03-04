import React from "react";
import PropTypes from "prop-types";
import {createGlobalStyle} from "styled-components";
import Header from "../components/header/header";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: "Lato";
  background-color: #929D9E;
 
}
body, body * {
  box-sizing: border-box;
 
}

`;

const Layout = ({children}) => {
  return (
    <>
    <GlobalStyle/>
    <Header />
  <main>{children}</main>
  </>
  )
}




Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
