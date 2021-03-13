import React from 'react';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import UserPageTemplate from 'templates/UserPageTemplate';
import { connect } from 'react-redux';
import { removeWord as removeWordAction } from 'redux/actions';
// import { useList } from 'context/AddWordContext';

const List = ({ words, removeWord }) => {
  // const list = useList();

  return(
    <UserPageTemplate>
      <Heading> Word List </Heading>
      {words.map((item) =>
      <>
        {/* <li key={item.id}>{item.wordAng}-{item.wordPl}  */}
        <h1 key={item.id}>{item.wordAng}-{item.wordPl} </h1>
        <Button onClick={() => removeWord(item.id)} secondary>DELETE</Button>
        {/* </li> */}
      </>
      )}
    </UserPageTemplate>
  )
};

const mapStateToProps = state => {
  const { words } = state;
  return { words };
}

const mapDispatchToProps = dispatch => ({
  removeWord: (id) => dispatch(removeWordAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);