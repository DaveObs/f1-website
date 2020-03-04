import React from "react";
import LogoSVG from "../../../assets/icons/F1.svg";
import styled from "styled-components";
import Nav from "./nav";
import Container from "../container";



const StyleHeader = styled.header`
padding: 20px 0;
background-color: #929D9E;
display: flexbox;
justify-content: space-between;
align-items: center;
`;

const StyledLogo = styled.img`
height: 60px;
margin-left: -80px;
`;

const Header = () => (
  <Container>
  <StyleHeader>
  <StyledLogo src={LogoSVG}/>
  <Nav />
  </StyleHeader>
  </Container>
)


export default Header