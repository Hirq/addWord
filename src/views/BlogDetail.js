import React from 'react';
import styled from 'styled-components';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const BlogDetail = ({ blogs, idActive }) => {
  const data = blogs.filter((item) => item.id == idActive).map(({id, title, content, date, tag}) => ({id, title, content, date, tag}));
  return(
    <DetailsTemplate
      id={data[0].id}
      title={data[0].title}
      content={data[0].content}
      date={data[0].date}
      tag={data[0].tag}
      path="blog"
    >
    </DetailsTemplate>
  )
}

const mapStateToProps = (state, ownProps)  => {
  const { blogs } = state;
  return { 
    blogs,
    idActive: ownProps.match.params.index 
  };
}

export default connect(mapStateToProps)(BlogDetail);