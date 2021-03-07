import React, { Component, useState, useContext } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { useListUpdate, useWordAngUpdate, useWordPlUpdate, useWordAngUpdate2, useWordPlUpdate2 } from 'theme/AddWordContext';

const StyledInput = styled(Input)`
  margin-left: 10px;
`
const WordAddButton = () => {
  const addWord = useListUpdate(); 
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
      <Button type="submit" onClick={addWord}> Add Word</Button>
    </form>
    </>
    )
}

export default WordAddButton;