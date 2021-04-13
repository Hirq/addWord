import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const Blog = ({ notes }) => {
  return (
    <>
    <GridTemplate name="BLOG" countItem={notes.length}>
      {notes.map(({ title, content, date, tag, id }) => (
        <Card 
          id={id}
          title={title}
          content={content}
          date={date}
          tag={tag}
          key={id}
          path="blog"
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

export default connect(mapStateToProps)(Blog);