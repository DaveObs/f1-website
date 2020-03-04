import React from 'react';
import styled from "styled-components";
import Container from './container';
import Heading from "./content/heading";

const StyledUl = styled.ol`
padding: 0;
margin: 0;
`;

const StyledLi = styled.li`
margin-bottom: 35px;
line-height: 20pt;
font-weight: 300;
font-size: 16pt;
`;


const History = () => {
    return (
        <div>
            <Container>
                <Heading sizeVariant="big">History</Heading>
                <StyledUl>
                    <StyledLi>Sunt magna qui sint proident sint in id consectetur est aute ex. Culpa culpa dolor nostrud mollit occaecat sunt.
                    Amet aliqua sunt ipsum ipsum in minim culpa do nulla cillum.
                    Laborum commodo ut qui nostrud sint et ut veniam qui adipisicing culpa aliqua est.
                    Voluptate minim Lorem dolore velit velit pariatur enim non amet in ut mollit.
                    Cillum laboris veniam veniam voluptate tempor nostrud esse. Anim officia et nostrud non Lorem veniam tempor ea do in irure nisi eiusmod.
                    Dolore dolore proident mollit occaecat aute est exercitation velit ad dolore officia non. Occaecat qui est nulla reprehenderit.
                    Cillum mollit cupidatat amet pariatur ullamco ut aliqua elit magna amet veniam elit officia eu.
                    Incididunt anim velit ullamco anim fugiat adipisicing sint adipisicing proident veniam reprehenderit.</StyledLi>
                    <StyledLi>Sunt ad enim magna quis qui culpa ut Lorem nostrud amet cupidatat do do dolor.Ad ut sit exercitation qui nisi sunt enim ipsum laborum consectetur.Consectetur reprehenderit adipisicing officia esse dolor est officia elit proident culpa ut cillum.Dolor excepteur mollit ut nisi incididunt est aute. </StyledLi>
                    <StyledLi>Magna eu et dolor est tempor nulla eiusmod et.</StyledLi>
                    <StyledLi>Reprehenderit occaecat minim aliquip magna magna consequat.Cillum sint aliquip voluptate labore Lorem mollit ex.Dolore sunt aliqua minim consectetur do et ullamco.Consectetur cupidatat officia culpa est deserunt labore eiusmod eu.Et veniam ea nostrud cupidatat mollit dolore aliquip non cillum magna sunt dolore.</StyledLi>
                </StyledUl>
            </Container>
        </div>
    );
}

export default History;
