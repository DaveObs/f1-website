import React from 'react';
import styled from "styled-components";
import LandoImg from "../../assets/img/landoNorris.jpg";

const StyledSecondBanner = styled.div`
height: 470x;
background-size: cover;
background-image: url(${LandoImg});
background-position: center;
color: #f98e1d;
margin-top: 60px;
padding: 80px 0 100px;
background-position-y: -310px;
background-repeat:no-repeat;
position:relative;


`;

const StyledTitle = styled.h3`
font-weight: 300;
font-style: italic;
font-size: 36pt;
line-height: 35pt;
margin: 30px;
`;

const StyledSubtitle = styled.h4`
font-weight: 300;
font-style: italic;
font-size: 24pt;
line-height: 35pt;
margin: 30px;

`;

const StyledColorName = styled.h4`
font-weight: 300;
font-style: italic;
font-size: 24pt;
line-height: 35pt;
margin: 30px;
transform: translate(1500px, -230px);
`;

const SecondBanner = () => (
    <StyledSecondBanner>
<StyledTitle>Lando Norris</StyledTitle>
<StyledSubtitle>age: 20</StyledSubtitle>
<StyledSubtitle>team: McLaren</StyledSubtitle>
<StyledColorName>color: papaya orange<br/>#F98E1D</StyledColorName>
    </StyledSecondBanner>
)

export default SecondBanner;
