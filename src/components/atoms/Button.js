import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.colorButton};
  width: 220px;
  height: 47px;
  border-color: ${({ theme }) => theme.colorBorder};
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight:  ${({ theme }) => theme.bold};
  font-size: 16px;
  text-transform: uppercase;
  outline: none !important; 

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.colorButtonSecondary};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}

  ${({ link }) =>
    link &&
    css`
      padding: 13px 30px;
      text-decoration: none;
      color: black;
    `}
`;

export default Button;