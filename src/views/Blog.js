import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';
import { addNote as addNoteAction } from 'redux/actions';

const StyledButton = styled(Button)`
  margin: 80px 0px 10px 150px;
`;

const Blog = ({ notes, addNote }) => {
  return (
    <>
    <StyledButton onClick={() => addNote({
      title: 'test',
      content: 'test2',
    })
    }>
      Add note</StyledButton>
    <GridTemplate>
      {notes.map(({ title, content, created, id }) => (
        <Card 
          id={id}
          title={title}
          content={content}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  </>
  )
}

const mapStateToProps = state  => {
  const { notes } = state;
  return { notes };
}

const mapDispatchToProps = dispatch => ({
  addNote: (noteContent) => dispatch(addNoteAction(noteContent))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);