import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Card from 'components/molecules/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import ListTemplate from 'templates/ListTemplate';
import GridTemplate from 'templates/GridTemplate';
import { connect } from 'react-redux';
import { removeWord as removeWordAction, addSet as addSetAction, addWordToSet as addWordToSetAction } from 'redux/actions';

// import { useList } from 'context/AddWordContext';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: baseline;
`

const StyledWrapperList = styled.div`
  width: 30vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
`
const StyledHeader = styled.div`
  font-size: ${({theme})  => theme.fontSize.xl};
  font-weight: ${({theme})  => theme.bold};
  text-align: center;
`

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
`
const StyledLi = styled.li`
  display: flex;
`

const StyledButtonTransferWord = styled(Button)`
  margin-left: auto;
  min-width: 105px;
`

const StyledButtonDelete = styled(Button)`
  min-width: 105px;
`

const StyledWrapperSet = styled.div`
  width: 50vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
`
const StyleWordSet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`
const StyledWrapperPage = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`
const StyledPageNumber = styled.div`
  width: 30px;
  height: 20px;
  background-color: red;
  color: black;
  text-align: center;
  margin: 0;
  padding: 0;
`
const StyledForm = styled.form`
  margin: 10px 10px 10px 10px;
`

const StyledSelect = styled.select`
  height: 30px;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
  border-color: ${({theme}) => theme.colorBorder};
`

const List = ({ words, wordSets, removeWord, addSet }) => {
  const [nameSet, setNameSet] = useState('');
  const [selectSet, setSelectSet] = useState();
  const dataTest = wordSets[0].words;

  const handleChange = (e) => {
    setNameSet(e.target.value);
  }

  const handleChangeSelectSet = (e) => {
    const data = wordSets.find((item) => item.id == e.target.value);
    setSelectSet(data.words);
    console.log(selectSet);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameSet('');
  }

  const AddItemToSetAndRemoveFromList = (item) => {
    selectSet.push(item.wordAng + ' - ' + item.wordPl);
    removeWord(item.id);
  }

  useEffect(() => {
    setSelectSet(dataTest);;
  }, [])

  // const list = useList();
  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledWrapperList>
          <StyledHeader> Word List </StyledHeader>      
          {wordSets.length > 0 ?
            <>
            <StyledSelect onChange={handleChangeSelectSet}>
              {wordSets.map(({ title, id }) => (
                <option value={id} key={id} >{title} </option>
              ))}
            </StyledSelect>
            </>
          : null }
          <StyledUl>
          {words.map((item) =>
            <StyledLi key={item.id}>
              {item.wordAng}-{item.wordPl}  
              <StyledButtonTransferWord onClick={() => AddItemToSetAndRemoveFromList(item)} secondary> TEST </StyledButtonTransferWord>
              <StyledButtonTransferWord onClick={() => selectSet.push(item.wordAng + ' - ' + item.wordPl)} secondary> ADD TO SELECT SET</StyledButtonTransferWord>
              <StyledButtonDelete onClick={() => removeWord(item.id)} secondary>DELETE</StyledButtonDelete>
            </StyledLi>
          )}
          </StyledUl>
          <StyledWrapperPage>
          { words.length > 5 && <> <StyledPageNumber> 1 </StyledPageNumber><StyledPageNumber> 2 </StyledPageNumber></>}
          { words.length > 10 && <StyledPageNumber> 3 </StyledPageNumber> }
          { words.length > 11 && <StyledPageNumber> 3 </StyledPageNumber> }
          { words.length > 12 && <StyledPageNumber> 3 </StyledPageNumber> }
          { words.length > 13 && <StyledPageNumber> 3 </StyledPageNumber> }
          </StyledWrapperPage>
        </StyledWrapperList>

        <StyledWrapperSet>
          <StyledHeader> Set List </StyledHeader>
            <StyledForm onSubmit={handleSubmit}>
              <Input value={nameSet|| ''} placeholder="name set" onChange={handleChange}/>
              <Button onClick={() => addSet({
                title: nameSet,
                words: ['last samuraj', 'casino']
              })}>
                Add set
              </Button>
            </StyledForm>
            <StyleWordSet>
              {wordSets.map(({ title, id}) => (
              <Card 
              id={id}
              title={title}
              path="list"
              key={id}
              />
              ))}
            </StyleWordSet>
        </StyledWrapperSet>
      </StyledWrapper>
    </ListTemplate>
  )
};

const mapStateToProps = state => {
  const { words, wordSets } = state;
  return { words, wordSets };
}

const mapDispatchToProps = dispatch => ({
  removeWord: (id) => dispatch(removeWordAction(id)),
  addSet: (id) => dispatch(addSetAction(id)),
  addWordToSet: (id) => dispatch(addWordToSetAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);