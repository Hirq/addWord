import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const OneWordTest = ( {wordSets, idActive, idActiveSet} ) => {
  const data = wordSets.allIds.filter((item) => item == idActive).map(({id}) => ({id}));

  return( 
    <DetailsTemplate
      // id={data[0]}
      id={idActive}
      title={idActiveSet}
      path="oneWord"
    >
    </DetailsTemplate>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { wordSets } = state;
  return {
    wordSets,
    idActive: ownProps.match.params.index,
    idActiveSet: ownProps.match.url
  }
}

export default connect(mapStateToProps)(OneWordTest);