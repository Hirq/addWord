import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { useListUpdate, useWordAngUpdate, useWordPlUpdate, useWordAngUpdate2, useWordPlUpdate2 } from 'context/AddWordContext';
import { connect } from 'react-redux';
import { addWord as addWordAction } from 'redux/actions';

const StyledInput = styled(Input)`
  margin-left: 10px;
`
const WordAddButton = ({ addWord }) => {
  // const addWord = useListUpdate(); 
  const wordAng = useWordAngUpdate();
  const wordPl = useWordPlUpdate();
  const setWordAng = useWordAngUpdate2();
  const setWordPl = useWordPlUpdate2();

  const handleSubmit = (e) => {
    e.preventDefault();
    setWordPl('');
    setWordAng('');
  }

  const handleChange = (e) => {
    setWordAng(e.target.value);
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <StyledInput value={wordAng || ''} name="wordAng" placeholder="ANG" onChange={handleChange}></StyledInput>
      <StyledInput value={wordPl || ''} name="wordPl" placeholder="PL" onChange={e => setWordPl(e.target.value)}></StyledInput>
      <Button type="submit" onClick={() => addWord({
        wordPl: wordPl,
        wordAng: wordAng,
      })
      }> Add Word</Button>
      {/* <Button type="submit" onClick={addWord()}> Add Word</Button> */}
    </form>
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    addWord: (wordContent) => dispatch(addWordAction(wordContent)),
});

export default connect(null, mapDispatchToProps,)(WordAddButton);