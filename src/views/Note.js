import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const Note = ({ notes }) => {
  const archiveNote = notes.filter(note => note.archived === true).map(({title, content, date, id }) => (
    <Card
    id={id}
    title={title}
    content={content}
    date={date}
    key={id}
    path="note"
    />
  ))

  const currentNote = notes.filter(note => note.archived === false).map(({title, content, date, id }) => (
    <Card
    id={id}
    title={title}
    content={content}
    date={date}
    key={id}
    path="note"
    />
  ))

  return (
    <>
      <GridTemplate path="note" notes={currentNote} countNotes={currentNote.length} archiveNote={archiveNote} countArchiveNote={archiveNote.length}/>
    </>
  )
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
}

export default connect(mapStateToProps)(Note);