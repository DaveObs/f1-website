import React from 'react';
import styled from "styled-components";
import BannerImg from "../../assets/img/bmwsauber.jpg";


const StyledFirstBanner = styled.div`
height: 650px;
position: relative;
background-image: url(${BannerImg});
background-size: cover;
background-position: center;
background-position-y: -85px;
background-repeat: no-repeat;
&::before, &::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 13px;
    background-color: #7F8688;
}
&::before {
    top: 0;
    left: 0;
} &::after {
    right:0;
    bottom: 0;
}
`;

const FirstBanner = () => {
    console.log(BannerImg)
    console.log(typeof BannerImg)
    return (
    <StyledFirstBanner />
    )
}

export default FirstBanner;