import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import { useTheme, useThemeUpdate } from 'theme/ThemeContext';

const StyledDarkModeContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

const StyledDarkModeSpan = styled.span`
  font-size: 1.2em;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-top: 4px;
  margin-right: 2px;
  :last-child{
    margin-top: 5px;
  }
`

const StyledToggleDarkMode = styled.span`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
`

const StyledInputChangeStyle = styled(Input)`
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;
  :checked + label{
    left: 30px;
  };
  :focus-visible{
    outline: solid 2px white;
  }
`

const StyledInputChangeStyleLabel = styled.label`
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
  position: absolute;
  left: 2px;
  background: #fff;
  opacity: 0.9;
  background-color: cyan;
`
const ToggleChangeTheme = () => {
  const toggleTheme = useThemeUpdate()
  const darkTheme = useTheme()
  return (
    <>
      <StyledDarkModeContainer>
        <StyledDarkModeSpan style={{ color: darkTheme ? "grey" : "yellow"}}>☀</StyledDarkModeSpan>
        <StyledToggleDarkMode>
          <StyledInputChangeStyle
          checked={darkTheme}
          onChange={toggleTheme}
          type="checkbox"
          />
          <StyledInputChangeStyleLabel/>
        </StyledToggleDarkMode>
        <StyledDarkModeSpan style={{ color: darkTheme ? "black" : "grey"}}>☾</StyledDarkModeSpan>
      </StyledDarkModeContainer>
    </>
  );
};

export default ToggleChangeTheme;