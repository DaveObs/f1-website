import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
max-width: 1200px;
padding: 0 15px;
margin: 0 auto;
clear: both;
`;

const Container = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);

export default Container;
