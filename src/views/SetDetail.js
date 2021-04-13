import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button'
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const SetDetail = ({wordSets, idActivate }) => {
  const data = wordSets.filter((item) => item.id == idActivate).map(({id, title, words}) => ({id, title, words}))

  return (
    <DetailsTemplate
      id = {data[0].id}
      title = {data[0].title}
      contentSet = {data[0].words}
      path="list"
    >
    </DetailsTemplate>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { wordSets } = state;
  return {
    wordSets,
    idActivate: ownProps.match.params.index
  }
}

export default connect(mapStateToProps)(SetDetail);