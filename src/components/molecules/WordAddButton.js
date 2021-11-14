import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { useListUpdate, useWordAngUpdate, useWordPlUpdate, useWordAngUpdate2, useWordPlUpdate2 } from 'context/AddWordContext';
import { connect } from 'react-redux';
import { addWord as addWordAction } from 'redux/actions';

const StyledForm = styled.form`
  margin: 10px 10px 10px 10px;
`

const StyledInput = styled(Input)`
  margin-left: 5px;
  margin-right: 10px;
`

const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput value={wordAng || ''} name="wordAng" placeholder="ANG" onChange={handleChange} maxLength='30'></StyledInput>
      <StyledInput value={wordPl || ''} name="wordPl" placeholder="PL" onChange={e => setWordPl(e.target.value)} maxLength='30'></StyledInput>
      <StyledButton type="submit" onClick={() => addWord({
        wordPl: wordPl,
        wordAng: wordAng,
      })
      }> + </StyledButton>
      {/* <Button type="submit" onClick={addWord()}> Add Word</Button> */}
    </StyledForm>
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    addWord: (wordContent) => dispatch(addWordAction(wordContent)),
});

export default connect(null, mapDispatchToProps,)(WordAddButton);