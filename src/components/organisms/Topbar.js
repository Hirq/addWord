import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import ToggleChangeTheme from 'components/molecules/ToggleChangeTheme';
import Timer from 'components/molecules/Timer';
import WordAddButton from 'components/molecules/WordAddButton';

const StyledWrapperTop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 7vh;
  background-color: ${({theme}) => (theme.topBar)};
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: stretch;
`;

const StyledLeftPage = styled.div`
  margin: 0px 0px 0px 8vw;
  padding: 0;
  list-style: none;
`
const StyledRightPage = styled.div`
  margin-right: 5px;
  margin-left: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

const StyledInput = styled(Input)`
  margin-left: 10px;
`

const StyledButton = styled(Button)`
  margin-left: 20px;
`

const Topbar = () => {
  return (
    <>
    <StyledWrapperTop>
      <StyledLeftPage>
        <StyledInput placeholder="ANG" name="word_ang"></StyledInput>
        <StyledInput placeholder="PL" name="word_pl"></StyledInput>
        <WordAddButton/>
      </StyledLeftPage>
      <StyledRightPage>
        <ToggleChangeTheme/>
        <Timer/>
      </StyledRightPage>
    </StyledWrapperTop>
    </>
  );
};

export default Topbar;