import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const Note = ({ notes }) => {
return (
  <>
  <GridTemplate name="NOTE" countItem={notes.length}>
    {notes.map(({title, content, date, id }) => (
      <Card
      id={id}
      title={title}
      content={content}
      date={date}
      key={id}
      path="note"
    />
    ))}
  </GridTemplate>
  </>
)
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
}

export default connect(mapStateToProps)(Note);