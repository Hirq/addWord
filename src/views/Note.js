import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';

const Note = ({ notes }) => {
  const archiveNote = notes.filter(note => note.archived === true);
  const currentNote = notes.filter(note => note.archived === false);

  return (
    <GridTemplate path="note" notes={currentNote} countNotes={currentNote.length} archiveNote={archiveNote} countArchiveNote={archiveNote.length}/>
  )
}

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
}

export default connect(mapStateToProps)(Note);