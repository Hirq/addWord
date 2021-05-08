import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import { connect } from 'react-redux';
import { removeNote as removeNoteAction } from 'redux/actions';
import { Redirect } from 'react-router-dom';

const StyledWrapper = styled.div`
  min-height: 400px;
  border-radius: 10px;
  border-color: ${({theme}) => theme.colorBorder};
  background-color: ${({ theme }) => (theme.bodyExtra)};
  display:grid;
  grid-template-rows: 0.25fr 1fr;
  overflow:hidden;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  ${({ set }) =>
    set &&
    css`
      min-height: 100px;
      grid-template-rows: repeat(auto-fill, minmax(100px, auto));
      margin: 10px 10px;
    `}
  &:hover{
    background-color: ${({ theme }) => (theme.topBar)};
  }
`
const InnerWrapper = styled.div`
  padding: 15px 25px;
  ${({ flex }) =>
    flex &&
    css`
      display:flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: auto;
`;

const Card = ({ id, title, content, date, tag, removeNote, path }) => {
  const [redirect, setRedirect] = useState(false); 

  const handleCardClick = () => {
    setRedirect(state => !state)
  }

  if (redirect)  {
    if (path === 'blog'){
      return <Redirect to={`blog/${id}`} />;
    }
    if (path === 'list') {
      return <Redirect to={`list/${id}`} />;
    }
  } 

  return (
  <>
    {path === 'blog' ?
    <StyledWrapper onClick={handleCardClick}>
      <InnerWrapper>
        <Heading> {title} </Heading>
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <StyledParagraph>{tag}</StyledParagraph>
        <Paragraph>{date}</Paragraph>
        <Button onClick={() => removeNote(id)} secondary>REMOVE</Button>
      </InnerWrapper>
    </StyledWrapper>
    :
    <StyledWrapper set onClick={handleCardClick}>
      <InnerWrapper>
        <Heading> {title} </Heading>
      </InnerWrapper>
    </StyledWrapper>
    }
  </>
  )
}

const mapDispatchToProps = dispatch => ({
  removeNote: (id) => dispatch(removeNoteAction(id)),
})

export default connect(null, mapDispatchToProps,)(Card);