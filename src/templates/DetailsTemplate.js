import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import { connect } from 'react-redux';
import { removeSet as removeSetAction } from 'redux/actions';
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

const DetailsTemplate = ({ title, content, date, tag, contentSet = [], path, id, removeSet}) => {
  const [visibleBox, setVisibleBox] = useState(false);

  const handleConfirmBox = () => {
    setVisibleBox(state => !state)
  }

  const hideConfirmBox = () => {
    {visibleBox ? setVisibleBox(false) : setVisibleBox(false)}
  }
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
      { contentSet === [] 
      ? null 
      : contentSet.map((item) => <Paragraph key={item}>{item}</Paragraph> )
      }
      <Paragraph>{date}</Paragraph>
      <Paragraph>{tag}</Paragraph>
      { path === 'blog'
      ? <Button as={Link} to={`/blog`} link> save </Button>
      : 
      <>
        <Button as={Link} to={`/list`} link> save </Button>
        <Button onClick={handleConfirmBox}>DEL</Button>
        
        {/* <Button onClick={() => contentSet.push('ele')}  >ADD ele AS WORD</Button> */}

        <ConfirmBox isOpen={visibleBox} onRequestClose={handleConfirmBox}>
          <StyledHeadingModal>You are sure want to delete this set list?</StyledHeadingModal>
          <StyledButtonsModal>
          <StyledButtonModalBack onClick={handleConfirmBox}>back</StyledButtonModalBack>
          <StyledButtonModalRemove onClick={() => removeSet(id)} as={Link} to={`/list`} secondary link>REMOVE</StyledButtonModalRemove>
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

const mapDispatchToProps = dispatch => ({
  removeSet: (id) => dispatch(removeSetAction(id)),
})

export default connect(null,mapDispatchToProps)(DetailsTemplate);