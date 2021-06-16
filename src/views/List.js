import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
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

const StyledReactSelect = styled(Select)`
  color: black;
`

const List = ({ words, wordSets, removeWord, addSet, addWordToSet }) => {
  const [nameSet, setNameSet] = useState('');
  const [selectSet, setSelectSet] = useState();
  const [selectSetName, setSelectSetName] = useState();
  const [optionSelect, setOptionSelect] = useState([]);

  const handleChange = (e) => {
    setNameSet(e.target.value);
  }

  const handleChangeSelectSet = (e) => {
    const data = wordSets.allIds.find((item) => wordSets.byId[item].id == e.target.value);
    console.log(wordSets.byId[data].title);
    setSelectSetName(wordSets.byId[data].title);
    setSelectSet(data);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameSet('');
  }

  const AddWordToSetAndDeleteFromList = (word, idWord, idSet, nameSet) => {
    addWordToSet(word, idWord, idSet, nameSet)
    removeWord(idWord);
  }

  const handleChangeWordSelect = (newValue, actionMeta) => {
    setSelectSetName(newValue.value);
    setSelectSet(newValue.id);
  };

  useEffect(() => {
    if (wordSets.allIds.length > 0) {
      const initialData = wordSets.allIds[0];
      setSelectSet(initialData);
      setSelectSetName(wordSets.byId[initialData].title);
      console.log(selectSet);

      wordSets.allIds.map((i) => 
      {
        setOptionSelect(optionSelect => optionSelect.concat({value: wordSets.byId[i].title, label: wordSets.byId[i].title, id: wordSets.byId[i].id }))
      })

    }
  }, [])

  // const list = useList();
  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledWrapperList>
          <StyledHeader> Word List </StyledHeader>      
          {wordSets.allIds.length > 0 && words.allIds.length > 0  ?
            <>
            <StyledSelect onChange={handleChangeSelectSet}>
              {wordSets.allIds.map((item) => (
                <option value={wordSets.byId[item].id} key={wordSets.byId[item].id} >{wordSets.byId[item].title} </option>
              ))}
            </StyledSelect>
            {/* <StyledReactSelect options={optionSelect} onChange={handleChangeWordSelect}/> */}
            </>
          : null }
          <StyledUl>
          {words.allIds.map((item) => 
            <StyledLi key={item}>
            {words.byId[item].wordPl}- {words.byId[item].wordAng}
            <StyledButtonTransferWord onClick={() => AddWordToSetAndDeleteFromList(words.byId[item], item, selectSet, selectSetName)} secondary> Add to set </StyledButtonTransferWord>
            <StyledButtonDelete onClick={() => removeWord(item)} secondary>DELETE</StyledButtonDelete>
          </StyledLi>
          )}

          </StyledUl>
          <StyledWrapperPage>
          { words.allIds.length > 5 && <> <StyledPageNumber> 1 </StyledPageNumber><StyledPageNumber> 2 </StyledPageNumber></>}
          { words.allIds.length > 10 && <StyledPageNumber> 3 </StyledPageNumber> }
          { words.allIds.length > 11 && <StyledPageNumber> 3 </StyledPageNumber> }
          { words.allIds.length > 12 && <StyledPageNumber> 3 </StyledPageNumber> }
          { words.allIds.length > 13 && <StyledPageNumber> 3 </StyledPageNumber> }
          </StyledWrapperPage>
        </StyledWrapperList>

        <StyledWrapperSet>
          <StyledHeader> Set List </StyledHeader>
            <StyledForm onSubmit={handleSubmit}>
              <Input value={nameSet|| ''} placeholder="name set" onChange={handleChange}/>
              <Button onClick={() => addSet({
                title: nameSet,
                allIdWords: [],
                words: {
                  // 10: {
                  //   wordPl: 'testowa wiadomosc',
                  //   wordAng: 'test text'
                  // } 
                }
              })}>
                Add set
              </Button>
            </StyledForm>
            <StyleWordSet>
              {wordSets.allIds.map((item) => (
              <Card 
              id={wordSets.byId[item].id}
              title={wordSets.byId[item].title}
              path="list"
              key={wordSets.byId[item].id}
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
  addWordToSet: (word, idWord, idSet, nameSet) => dispatch(addWordToSetAction(word, idWord, idSet, nameSet)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);