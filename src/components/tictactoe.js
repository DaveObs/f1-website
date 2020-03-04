import React, { useState, useEffect } from 'react';
import Container from "../components/container";
import Heading from "../components/content/heading";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import Kubica from "../../assets/img/kubika.jpg";



const StyledWrapper = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const StyledRow = styled.p`
display: flex;
`;

const StyledField = styled.button`
display: flex;
justify-content: center;
background-color: #3275a6;
align-items: center;
flex: 1;
border: 1px solid #000;
height: 200px;
outline: none;
transition: background-color 0.2s ease;
& [data-value ="0"]:hover {
    background-color: #bed7e8;
    cursor: pointer;
    
}
&[data-value="1"]::before {
    content: "O";
    }
    &[data-value="2"]::before{
        content: "X";
    }
    &::before {
        color: #fff;
        font-size: 150px;
    }
`;

const InitialArea = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            y: { type: "spring", stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});


const StyledModal = styled(Modal)`
position: fixed;
width: 600px;
height: 400px;
background-image: url(${Kubica});
border-radius: 10px;
top: 100px;
left: 50%;
transform: translateX(-50%) !important;
display: flex;
text-align: left;
font-size: 40px;
align-items: center;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

`;

const Shade = posed.div({
    enter: {opacity: 1},
    exit: {opacity: 0}
});

const StyledShade = styled(Shade)`
position: fixed;
background: rgba(0,0,0,0.8);
top: 0;
left: 0;
right: 0;
bottom: 0;
`;

const Tictactoe = () => {
    const [area, setArea] = useState(InitialArea);
    const [player, setPlayer] = useState(1);
    const [moves, setMoves] = useState(0);
    const [modalText, setModalText] = useState(null);
    const getValue = (y, x) => area[y][x];
    const onClick = (y, x) => {
        if(getValue(y, x) !== 0) {
            return;
        };
        const newArea = [...area];
        newArea[y][x] = player;
        setArea(newArea);
        setPlayer(player === 1 ? 2 : 1);
        setMoves(moves + 1);
    }
    const checkIfPlayerWin = player => 
    (area[0][0] === player && area[0][1] === player && area[0][2] === player) ||
    (area[1][0] === player && area[1][1] === player && area[1][2] === player) ||
    (area[2][0] === player && area[2][1] === player && area[2][2] === player) ||
    (area[0][0] === player && area[1][0] === player && area[2][0] === player) ||
    (area[0][1] === player && area[1][1] === player && area[2][1] === player) ||
    (area[0][2] === player && area[1][2] === player && area[2][2] === player) ||
    (area[0][0] === player && area[1][1] === player && area[2][2] === player) ||
    (area[0][2] === player && area[1][1] === player && area[2][0] === player);

        const clearArea = () => setArea([
            [0,0,0],
            [0,0,0],
            [0,0,0]
         ]);

        
         useEffect(() => {
             if (checkIfPlayerWin(1)) {
             setModalText("Wygrywa" + "\n" + "Gracz 1");
             clearArea();
            }
            if (checkIfPlayerWin(2)) {
                setModalText("Wygrywa Gracz 2");
                clearArea();
            }
        }, [area]);

        useEffect(() => {
            if (moves === 9) {
                setModalText("Remis :(")
                clearArea();
            }
        },[moves]);

    return (
       <Container>
           <Heading sizeVariant="big">Tic-Tac-Toe - play with your friend</Heading>
           <PoseGroup>
               {modalText && [
                   <StyledShade onClick={() => setModalText(null)} key="shade" className="shade" />,
               <StyledModal key="modal" className="modal">{modalText}</StyledModal> 
               ]}
           </PoseGroup>
           <StyledWrapper>
               {area.map((row, yIndex) => (
                   <StyledRow>
                       {row.map((field, xIndex) => (
                           <StyledField 
                                data-value={getValue(yIndex, xIndex)}
                                onClick={() => onClick(yIndex, xIndex)}
                            />
                       ))}
                   </StyledRow>
               ))}
           </StyledWrapper>
       </Container>
    );
}

export default Tictactoe;
