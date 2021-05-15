import React from 'react';
import styled from 'styled-components';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const NoteDetail = ({ notes, idActive }) => {
  const data = notes.filter((item) => item.id == idActive).map(({id, title, content, date, tag}) => ({id, title, content, date, tag}));
  return(
    <DetailsTemplate
      id={data[0].id}
      title={data[0].title}
      content={data[0].content}
      date={data[0].date}
      tag={data[0].tag}
      path="note"
    >
    </DetailsTemplate>
  )
}

const mapStateToProps = (state, ownProps)  => {
  const { notes } = state;
  return { 
    notes,
    idActive: ownProps.match.params.index 
  };
}

export default connect(mapStateToProps)(NoteDetail);