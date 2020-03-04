import React from 'react';
import Heading from './content/heading';
import Container from "../components/container";
import Vettel from "../../assets/img/vettel.jpg";
import Verstappen from "../../assets/img/verstappen.jpg";
import Stroll from "../../assets/img/stroll.jpg";
import Sainz from "../../assets/img/sainz.jpg";
import Russel from "../../assets/img/russel.jpg";
import Romek from "../../assets/img/romek.jpg";
import Ricciardo from "../../assets/img/ricciardo.jpg";
import Raikonen from "../../assets/img/raikonnen.jpg";
import Perez from "../../assets/img/perez.jpg";
import Ocon from "../../assets/img/ocon.jpg";
import Norris from "../../assets/img/norris.jpg";
import Magnussen from "../../assets/img/magnussen.jpg";
import Leclerc from "../../assets/img/leclerc.jpg";
import Latifi from "../../assets/img/latifi.jpg";
import Kvyat from "../../assets/img/kvyat.jpg";
import Hamilton from "../../assets/img/hamilton.jpg";
import Giovi from "../../assets/img/giovi.jpg";
import Gasly from "../../assets/img/Gasly.jpg";
import Bottas from "../../assets/img/bottas.jpg";
import Albon from "../../assets/img/albon.jpg";
import styled from "styled-components";
import { useState, useEffect } from "react";


const imgs = [
    { key: 1, img: Hamilton },
    { key: 2, img: Bottas },
    { key: 3, img: Leclerc },
    { key: 4, img: Vettel },
    { key: 5, img: Verstappen },
    { key: 6, img: Albon },
    { key: 7, img: Sainz },
    { key: 8, img: Norris },
    { key: 9, img: Ricciardo },
    { key: 10, img: Ocon },
    { key: 11, img: Kvyat },
    { key: 12, img: Gasly },
    { key: 13, img: Raikonen },
    { key: 14, img: Giovi },
    { key: 15, img: Perez },
    { key: 16, img: Stroll },
    { key: 17, img: Magnussen },
    { key: 18, img: Romek },
    { key: 19, img: Russel },
    { key: 20, img: Latifi }
];

const StyledWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

`;

const StyledCard = styled.div`
width: calc((100% /10) - 15px);
height: 200px;
background-size:cover;
background-position: top;
background-size: 45vh;
border: 2px solid #000;
cursor: pointer;
border-radius: 20px;
margin-bottom: 45px;
font-size: 30px;
line-height: 40px;
text-align: center;
color: #0f0;
`;

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const cards = shuffle ([...imgs, ...imgs]);


const Gallery = () => {
    const [clickedCards, setClickedCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState(cards.map((card, index) => index));
    const [previewStage, setPreviewStage] = useState(true);
    const isClicked = index => clickedCards.indexOf(index) > -1;
    const isVisible = index => visibleCards.indexOf(index) > -1;
    const onClick = index => {
        if (!previewStage && !isClicked(index) && !isVisible(index)) {
            setClickedCards([...clickedCards, index]);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setPreviewStage(false);
            setVisibleCards([]);
        }, 10000)
    }, [])

    useEffect(() => {
        if (clickedCards.length < 2) {
            return;
        }
        if (clickedCards.length === 3) {
            setClickedCards([clickedCards[2]]);
        }
        const firstIndex = clickedCards[0];
        const secondIndex = clickedCards[1];
        const isSameKey = cards[firstIndex].key === cards[secondIndex].key;
        if (isSameKey) {
            setVisibleCards([...visibleCards, firstIndex, secondIndex])
        }
    }, [clickedCards])

    return (
        <> <Container>
            <Heading sizeVariant="big">Gallery game - find driver twin</Heading>
            <h3>After 10 sec pictures will dissapear. Try to remember their positions. After every restart positions will be different.</h3>
            <br/>
            </Container>
            <StyledWrapper>
                {cards.map((card, index) => {
                    const backgroundImage  = isClicked(index) || isVisible(index) ? `url(${card.img})` : "none";
                    return (
                        <StyledCard
                        onClick= {() => onClick(index)}
                        key={index}
                        style={{
                            backgroundImage, borderColor: isClicked(index) ? "#f00" : isVisible(index) ? "#0f0" : "#000",
                        }}></StyledCard>
                    )
                })}          
            </StyledWrapper>
       </>
    );
}

export default Gallery;
