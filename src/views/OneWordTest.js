import React, { useState, useEffect } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';

const OneWordTest = ( {wordSets, idActive, idActiveSet} ) => {
  const data = wordSets.allIds.filter((item) => item == idActive).map(({id}) => ({id}));
  const [idSet, setIdSet] = useState('');

  useEffect(() => {
    setIdSet(idActiveSet.slice(6,-2))
  }, [])

  return( 
    <DetailsTemplate
      idSet={idSet}
      id={idActive}
      // title='Sprawdź słówka z zestawu:'
      title={'Sprawdź słówka z zestawu: TEGO SLICE TRZEBA INACZEJ ROBIC BO JAK BEDZIE 1000 to bedzie blad ' +  idSet}
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