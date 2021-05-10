import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import { connect } from 'react-redux';
import { removeSet as removeSetAction, removeWordUseName as removeWordUseNameAction, } from 'redux/actions';
// import Modal from 'react-modal';
import ConfirmBox from 'components/atoms/ConfirmBox';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 170px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledHeadingModal = styled(Heading)`
  flex-grow: 1;
`

const StyledButtonsModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  left: 0;
  bottom: 0;
`
const StyledButtonModalBack = styled(Button)`
  width: 120px;
`
const StyledButtonModalRemove = styled(Button)`
  width: 120px;
  height: auto;
  padding: 13px 28px;
`

const StyledButtonWordRemove = styled(Button)`
  width: 70px;
  height: 30px;
`

// const StyledModal = styled(Modal)`
//   background-color: red;
//   position: absolute;
//   width: 300px;
//   height: 200px;
//   top: 50%;
//   left: 50%;
//   margin-top: -100px;
//   margin-left: -150px;
//   border: 3px solid green;
//   padding: 10px;
// `

const DetailsTemplate = ({ title, content, date, tag, contentSet = {}, wordSetList = [], path, id, removeSet, removeWordUseName, wordSets  }) => {
  const [visibleBox, setVisibleBox] = useState(false);
  const [selectWord, setSelectWord] = useState();

  const handleConfirmBox = () => {
    setVisibleBox(state => !state)
  }

  const handleChangeSelectWord = (e) => {
    e.preventDefault();
    setSelectWord(e.target.value);
    console.log(selectWord);
  }

  const deleteWord = (id, idSet) => {
    console.log(id);
    // console.log(idSet);
    removeWordUseName(id, idSet);
    console.log(id);
    setFirstWord(idSet)
    console.log(selectWord);
  }

  const setFirstWord = (idSet) => {
    if (wordSetList.length > 0) {
      const data = wordSets.byId[idSet].allIdWords[0];
      const initialData = wordSetList[0];
      setSelectWord(data);
      // console.log(data);
    }
  };

  const sprawdz = (data) => {
    setFirstWord(id)
    console.log(data);
  }

  useEffect(() => {
    setFirstWord(id)
  }, [])

 return(
 <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
        <StyledParagraph></StyledParagraph>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {wordSetList.length > 0  ?
        <>
        <select onChange={handleChangeSelectWord} >
          {wordSetList.map(( item ) => (
            <option value={item} key={item} > {contentSet[item].wordAng} </option>
          ))}
        </select>

        <StyledButtonWordRemove type="button"  onClick={() => deleteWord(selectWord,id)} secondary> Remove REDUX </StyledButtonWordRemove>

        <StyledButtonWordRemove onClick={() => sprawdz(selectWord)} secondary> sprawdz </StyledButtonWordRemove>
        </>
      : null }

      { wordSetList === {} 
      ? null 
      : wordSetList.map((item) => (<Paragraph key={item}>{contentSet[item].wordAng} - {contentSet[item].wordPl} </Paragraph> ))
      }
      
      <Paragraph>{date}</Paragraph>
      <Paragraph>{tag}</Paragraph>
      { path === 'blog'
      ? <Button as={Link} to={`/blog`} link> save </Button>
      : 
      <>
        <Button as={Link} to={`/list`} link> back </Button>
        <Button onClick={handleConfirmBox}>Delete set</Button>
        <ConfirmBox ariaHideApp={false} isOpen={visibleBox} onRequestClose={handleConfirmBox}>
          <StyledHeadingModal>You are sure want to delete this set list?</StyledHeadingModal>
          <StyledButtonsModal>
            <StyledButtonModalBack onClick={handleConfirmBox}>back</StyledButtonModalBack>
            <StyledButtonModalRemove onClick={() => removeSet(id)} as={Link} to={`/list`}  link>REMOVE</StyledButtonModalRemove>
          </StyledButtonsModal>
        </ConfirmBox>
      </>
      }
    </StyledWrapper>
  </UserPageTemplate>
 )
};

// DetailsTemplate.propTypes = {
//   pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
//   title: PropTypes.string,
//   created: PropTypes.string,
//   content: PropTypes.string,
//   articleUrl: PropTypes.string,
//   twitterName: PropTypes.string,
// };

// DetailsTemplate.defaultProps = {
//   title: '',
//   created: '',
//   content: '',
//   articleUrl: '',
//   twitterName: '',
// };


const mapStateToProps = state => {
  const {  wordSets } = state;
  return { wordSets };
}

const mapDispatchToProps = dispatch => ({
  removeSet: (id) => dispatch(removeSetAction(id)),
  removeWordUseName: (idWord, idSet) => dispatch(removeWordUseNameAction(idWord, idSet)),
})

export default connect(mapStateToProps,mapDispatchToProps)(DetailsTemplate);