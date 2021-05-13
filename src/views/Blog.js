import React from 'react';
import styled from 'styled-components';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const Blog = ({ blogs }) => {
  return (
    <>
    <GridTemplate name="blog" countItem={blogs.length}>
      {blogs.map(({ title, content, date, tag, id }) => (
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
  const { blogs } = state;
  return { blogs };
}

export default connect(mapStateToProps)(Blog);