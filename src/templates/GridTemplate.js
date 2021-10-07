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
import Select from 'react-select';

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
const StyledReactSelect = styled(Select)`
  color: black;
`

const options = [
  { value: 'Book', label: 'Book', id: 0},
  { value: 'Video', label: 'Video', id: 1 },  
  { value: 'Internet', label: 'Internet', id: 2 },
  { value: 'Story', label: 'Story', id: 3 },
  { value: 'Diary', label: 'Diary', id: 4 },
  { value: 'Job', label: 'Job', id: 5 },
  { value: 'Holiday', label: 'Holiday', id: 6 },
  { value: 'Work', label: 'Work', id: 7 }
]

const GridTemplate = ({path, notes, countNotes, archiveNote, countArchiveNote, blogs }) => {
  const [visibleBar, setVisibleBar] = useState(false);
  const [withArchive, setWithArchive] = useState(false);
  const [searchTag, setSearchTag] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const [change, setChange] = useState(false);
  const [lengthTagFilter, setLengthTagFilter] = useState(0);

  const handleChangeTagSelect = (newValue, actionMeta) => {
    // console.log(newValue[newValue.length-1].value) // OK
    setChange(true);
    // setAddFilter(newValue.map((i) => i.value));
    // setSearchTag(searchTag.concat(addFilter));
    // setSearchTag(searchTag.concat((newValue[newValue.length-1].value)));
    // setSearchTag(newValue[newValue.length-1].value);
    setFilterOptions(newValue);
  };

  const handleSearchTag = (e) => {
    setSearchTag(e.target.value);
  }

  const handleSearchName = (e) => {
    setSearchName(e.target.value.toUpperCase());

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
        <StyledGrid>
          {notes.filter(item => (item.title.toUpperCase().includes(searchName))).map(({ title, content, date, id }) => (
            <Card
            id={id}
            title={title}
            content={content}
            date={date}
            key={id}
            path="note"
            />
          ))}
        </StyledGrid>
      )
    }
    else{
      return(
        <StyledGrid>
          {archiveNote.filter(item => (item.title.toUpperCase().includes(searchName))).map(({ title, content, date, id }) => (
            <Card
            id={id}
            title={title}
            content={content}
            date={date}
            key={id}
            path="note"
            />
          ))}
        </StyledGrid>
      )
    }
  }
  const determinePathSearch = (path) => {
    if (path === 'blog'){
      return(
        <>  
          {(searchTag.length > 2) ? (
            <StyledReactSelect value={filterOptions}  isMulti onChange={handleChangeTagSelect}/>
          ) : (
            <StyledReactSelect value={filterOptions}  isMulti options={options} onChange={handleChangeTagSelect}/>
          )
          }
          {/* <Input search placeholder="Search tag" value={searchTag} onChange={handleSearchTag}/> */}
          <Input search placeholder="Search blog" value={searchName} onChange={handleSearchName}/>
        </>
      )
    }
    if (path === 'note'){
      return(
        <Input search placeholder="Search note" value={searchName} onChange={handleSearchName}/>
      )
    }
  }

  const determinePathGird = (path) => {
    if (path === 'blog'){
      if (lengthTagFilter === 0) {
        return (
          <StyledGrid>
            {blogs
            .filter(item => (item.title.toUpperCase().includes(searchName)))
            .map(({ title, content, date, tag, id }) => (
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
        )
      }
      if (lengthTagFilter === 1) {
        return (
          <StyledGrid>
            {blogs
            .filter(item => (item.title.toUpperCase().includes(searchName)))
            .filter(item => (item.tag.some((tags) => (tags.includes(searchTag[0])))))
            .map(({ title, content, date, tag, id }) => (
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
        )
      }
      if (lengthTagFilter === 2) {
        return (
          <StyledGrid>
            {blogs
            .filter(item => (item.title.toUpperCase().includes(searchName)))
            .filter(item => (item.tag.some((tags) => (tags.includes(searchTag[0])))))
            .filter(item => (item.tag.some((tags) => (tags.includes(searchTag[1])))))
            .map(({ title, content, date, tag, id }) => (
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
        )
      }  
      if (lengthTagFilter === 3) {
        return (
          <StyledGrid>
            {blogs
            .filter(item => (item.title.toUpperCase().includes(searchName)))
            .filter(item => (item.tag.some((tags) => (tags.includes(searchTag[0])))))
            .filter(item => (item.tag.some((tags) => (tags.includes(searchTag[1])))))
            .filter(item => (item.tag.some((tags) => (tags.includes(searchTag[2])))))
            .map(({ title, content, date, tag, id }) => (
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
        )
      }  
      else {
        <StyledGrid>
          {blogs
          .filter(item => (item.title.toUpperCase().includes(searchName)))
          .map(({ title, content, date, tag, id }) => (
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
      }
    }
    if (path === 'note'){
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
    if (change == true) {
      if (filterOptions.length <= 3) {
        setSearchTag(filterOptions.map((i) => i.value));
      }
      setLengthTagFilter(filterOptions.length)
      setChange(false)
    }
    console.log("Dlugosc filtra - ",  lengthTagFilter)
    console.log("Tablica tagow - ", searchTag)
  })

  return (
    <UserPageTemplate >
      <StyledWrapper onClick={hideAddBar}>
        <StyledPageHeader>
          {determinePathSearch(path)}
          <StyledHeading big as="h1">
            {path}
          </StyledHeading>
          <StyledParagraph>{withArchive ? countArchiveNote : countNotes }</StyledParagraph>
        </StyledPageHeader>
        {determinePathGird(path)}
      </StyledWrapper>
      <StyledButtonIcon onClick={handleNewElementBarToggle}> + </StyledButtonIcon>
      <NewElementBar isVisible={visibleBar} hideAddBar={hideAddBar} path={path} action='Add'/>
    </UserPageTemplate>
  )
};

GridTemplate.propTypes = {
  path: PropTypes.oneOf(['note', 'blog']).isRequired,
};

GridTemplate.defaultProps = {
  path: 'note',
};

export default GridTemplate;