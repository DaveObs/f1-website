import React from 'react';
import styled from "styled-components";

const StyledHeading = styled.h2`
font-size: 30pt;
margin: 135px 0 100px;
text-transform: ${({ sizeVariant}) => sizeVariant === "big" ? "uppercase" : "lowercase"};
font-weight: 900;
font-family: "Lato";
line-height: ${({ sizeVariant }) => sizeVariant === "big" ? "90pt" : "48pt"};
color: ${({colorVariant}) => colorVariant === "white" ? "#fff" : "#000" };
&::after {
    content: "";
    display: block;
    height: 4px;
    width: 200px;
    background-color: ${({ colorVariant}) => colorVariant === "white" ? "#fff" : "#000"};
    margin-top: 30px;
}
`;


const Heading =  

({

    children,
    colorVariant = "black",
    sizeVariant = "small"
}) => (
    <StyledHeading colorVariant={colorVariant} sizeVariant={sizeVariant}>{children}</StyledHeading>
)

export default Heading;
