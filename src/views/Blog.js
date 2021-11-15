import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const Blog = ({ blogs, tags }) => {
  // const blogTagsArray = blogs.map((item) => item.tag);
  // const oneArrayOfTags = blogTagsArray.map((item) => `${item}`).join(' ');
  // const arrayTag = oneArrayOfTags.split(' ');

  //do zeszytu - operacje na tablicach - stringach

  return (
      <GridTemplate path="blog" countItem={blogs.length} blogs={blogs} tags={tags} />
  )
}

const mapStateToProps = state  => {
  const { blogs, tags } = state;
  return { blogs, tags };
}

export default connect(mapStateToProps)(Blog);