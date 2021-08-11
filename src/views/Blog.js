import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const Blog = ({ blogs }) => {
  const blogTagsArray = blogs.map((item) => item.tag);
  const oneArrayOfTags = blogTagsArray.map((item) => `${item}`).join(' ');
  const arrayTag = oneArrayOfTags.split(' ');

  return (
    <>
      <GridTemplate path="blog" countItem={blogs.length} arrayTag={arrayTag} blogs={blogs}>
        {/* {blogs.map(({ title, content, date, tag, id }) => (
          <Card 
            id={id}
            title={title}
            content={content}
            date={date}
            tag={tag}
            key={id}
            path="blog"
          />
        ))} */}
      </GridTemplate>
    </>
  )
}

const mapStateToProps = state  => {
  const { blogs } = state;
  return { blogs };
}

export default connect(mapStateToProps)(Blog);