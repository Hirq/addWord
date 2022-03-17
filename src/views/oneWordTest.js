import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const oneWordTest = ( {wordSets, idActive} ) => {
  const data = wordSets.allIds.filter((item) => item == idActive).map(({id}) => ({id}));
  return( 
    <DetailsTemplate
      id={data[0]}
      title={idActive}
      path="oneWord"
    >
    </DetailsTemplate>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { wordSets } = state;
  return {
    wordSets,
    idActive: ownProps.match.params.index 
  }
}

export default connect(mapStateToProps)(oneWordTest);