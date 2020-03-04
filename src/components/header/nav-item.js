import React from 'react';
import styled from "styled-components";

const StyledLi = styled.li`
margin-right: 70px;
&:last-child {
    margin-right: 0;
}
`;

const StyledA = styled.a`
font-family: "Lato";
font-size: 18pt;
line-height: 46pt;
color: #333;
font-weight: 700;
text-decoration: none;
text-transform: uppercase;
background-color: #F3E367;
padding: 10px;
border-radius: 15px;
`;

const NavItem = ({target, text}) => (
    <StyledLi>
        <StyledA href={"#" + target}>{text}</StyledA>
    </StyledLi>
)

export default NavItem;
