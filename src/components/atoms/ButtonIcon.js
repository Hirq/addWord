import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius :20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;

  &.active {
    background-color: ${({theme}) => theme.activeIconColor};
  }

  ${({ visible }) =>
    visible &&
    css`
      background-color: ${({ theme }) => theme.visibleIconColor};
    `}

  ${({ notVisible }) => 
    notVisible &&
    css`
      background-color: ${({ theme }) => theme.notVisibleIconColor}; 
    `}

`;

export default ButtonIcon;