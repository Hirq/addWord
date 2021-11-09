import React from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 10px;
`
const StyledBoxHeader = styled.div`
  background-color: blue;
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
`
const StyledBox = styled.div`
  background-color: red;
`

const Settings = () => {
  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledBoxHeader>Header</StyledBoxHeader>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
        <StyledBox></StyledBox>
      </StyledWrapper>
    </ListTemplate>
  ) 
}

export default Settings;