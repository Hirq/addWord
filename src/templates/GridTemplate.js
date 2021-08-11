import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';
import NewElementBar from 'components/organisms/NewElementBar';
import Card from 'components/molecules/Card';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  height: 90vh;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  right: 10px;
  bottom: 10px; 
  :hover {
    background-color: ${({ theme }) => (theme.colorButtonSecondary)};
    border: inset;
    border-color: ${({ theme }) => (theme.colorButtonSecondary)};
  }
`

const GridTemplate = ({path, notes, countNotes, archiveNote, countArchiveNote, arrayTag, blogs }) => {
  const [visibleBar, setVisibleBar] = useState(false);
  const [withArchive, setWithArchive] = useState(false);
  const [searchTag, setSearchTag] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [arrayTags, setArrayTags] = useState([]);
  
  // const people3 = arrayTag.map((item) => `${item}`).join(' ');

  const handleSearchTag = (e) => {
    setSearchTag(e.target.value);
  }

  const handleNewElementBarToggle = () => {
    setVisibleBar(state => !state)
  }

  const hideAddBar = () => {
    {visibleBar ? setVisibleBar(false) : setVisibleBar(false)}
  }

  const hideArchive = () => {
    setWithArchive(state => !state)
  }

  const checkArchive = () => {
    if (withArchive === false ){
      return(
      <StyledGrid>{notes}</StyledGrid>
      )
    }
    else{
      return(
      <StyledGrid>{archiveNote}</StyledGrid>
      )
    }
  }

  const determinePath = (path) => {
    if (path === 'blog'){
      return(
        <>
          <StyledGrid>
            {/* {blogs.filter(item => (item.tag[0].toLowerCase().includes(searchTag))).map(({ title, content, date, tag, id }) => ( */}
            {blogs.filter(item => (item.tag.find((test) => test.toLowerCase().includes(searchTag)))).map(({ title, content, date, tag, id }) => (
              <Card
              id={id}
              title={title}
              content={content}
              date={date}
              tag={tag}
              key={id}
              path="blog"
              />
            ))}
          </StyledGrid>
        </>
      )
    }
    if (path == 'note'){
      return(
        <>
          <Button onClick={hideArchive}> Archive </Button>
          <input type="checkbox" checked={withArchive}/>
          {checkArchive()}
        </>
      )
    }
  }

  useEffect(() => {
    if (path === 'blog'){
    setArrayTags(arrayTag);
    const results = arrayTags.filter(tag => (
      tag.toLowerCase().includes(searchTag))
    );
    setSearchResults(results);
  }}, [searchTag]);

  return (
    <UserPageTemplate >
      <StyledWrapper onClick={hideAddBar}>
        <StyledPageHeader>
          <Input search placeholder="Search tag" value={searchTag} onChange={handleSearchTag}/>
          <StyledHeading big as="h1">
            {path}
          </StyledHeading>
          <StyledParagraph>{withArchive ? countArchiveNote : countNotes }</StyledParagraph>
        </StyledPageHeader>
        {determinePath(path)}
      </StyledWrapper>
      <StyledButtonIcon onClick={handleNewElementBarToggle}> + </StyledButtonIcon>
      <NewElementBar isVisible={visibleBar} hideAddBar={hideAddBar} path={path} action='Add'/>
    </UserPageTemplate>
  )
};

// const mapStateToProps = state => {
//   const { blogs } = state;
//   return { blogs };
// }

// GridTemplate.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// GridTemplate.defaultProps = {
//   pageType: 'notes',
// };

export default GridTemplate;
// export default connect(mapStateToProps, null)(GridTemplate);