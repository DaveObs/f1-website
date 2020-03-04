import React from 'react';
import styled from "styled-components";
import NavItem from "./nav-item";


const menuElements = [{
    text: "About",
    target: "#about"
},{
    text: "History",
    target: "#history"
},{
    text: "Gallery",
    target: "#gallery"
},{
    text: "Tracks",
    target: "#tracks"
},{
    text: "Contact",
    target: "#contact"
}];

const StyledUl = styled.ul`
display: flex;
align-items: center;
list-style-type: none;
padding: 0;
margin-left: 100px;
`;


const Nav = () => (
    <nav>
        <StyledUl>
            {menuElements.map(menuElement => <NavItem{...menuElement}/>)}
        </StyledUl>
    </nav>

)

export default Nav;
