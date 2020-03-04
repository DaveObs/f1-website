import React from 'react';
import styled from "styled-components";
import Container from '../container';

const StyledHeader = styled.h1`
margin: 135px 0 100px;
text-transform: uppercase;
font-weight: 900;
font-family: "Lato";
line-height: 90pt;
font-size: 50pt;
color: #000;
&::after {
    content:"";
    display: block;
    height: 4px;
    width: 200px;
    background-color: #000;
    margin-top: 30px;
}
`;

const StyledParagraph = styled.p`
    font-size: 24pt;
    line-height: 46pt;
    font-weight:300;
    color: #000;
    margin-bottom: 40px;
`;


const Content = () => (
    <Container>
        <StyledHeader>About<br />Formula 1</StyledHeader>
        <StyledParagraph>Simple side about Formula 1</StyledParagraph>
        <StyledParagraph>Do et incididunt sit eiusmod commodo aliqua.</StyledParagraph>
        <StyledParagraph>Ea non velit aute dolore id labore excepteur aliqua veniam culpa reprehenderit quis deserunt tempor. 
            Laborum proident ea amet ullamco dolore amet amet voluptate. Eiusmod ipsum qui mollit labore irure mollit cupidatat consectetur.
            Adipisicing ea eiusmod elit dolore ex. Aliqua Lorem pariatur irure nisi anim ea dolore laboris anim pariatur.
            Amet minim aliquip aliqua velit et consectetur nostrud commodo do ex consectetur elit. 
            Ea fugiat cupidatat tempor pariatur amet nulla labore ullamco voluptate occaecat incididunt ut nostrud quis.
            Enim anim fugiat dolor ipsum eiusmod aute nisi commodo do dolor. Qui officia ex aliqua est proident culpa labore aute anim dolore non. 
            Velit veniam deserunt eiusmod magna voluptate est mollit magna aliqua aliqua.
            Sunt magna ea fugiat quis veniam laborum aliquip do dolor minim magna reprehenderit ex. 
            Officia reprehenderit nulla mollit labore ea. Qui nisi pariatur in commodo ipsum. 
            Lorem laborum ex deserunt excepteur sint labore velit cillum reprehenderit ullamco elit.</StyledParagraph>
    </Container>
)

export default Content;
