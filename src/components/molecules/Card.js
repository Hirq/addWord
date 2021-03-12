import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const StyledWrapper = styled.div`
  min-height: 400px;
  border-radius: 10px;
  position:relative;
  display:grid;
  grid-template-rows: 0.25fr 1fr;
  overflow:hidden;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
`
const InnerWrapper = styled.div`
  position: relative;
  padding: 15px 25px;
  background-color: ${({ theme }) => (theme.background)};

  ${({ flex }) =>
    flex &&
    css`
      display:flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const Card = ({ title, content }) => {
  return (
  <>
    <StyledWrapper>
      <InnerWrapper>
        <Heading> {title} </Heading>
      </InnerWrapper>
      <InnerWrapper flex>
       <Paragraph>{content}</Paragraph>
        <Button secondary>REMOVE</Button>
      </InnerWrapper>
    </StyledWrapper>
  </>
  )
}

export default Card;
