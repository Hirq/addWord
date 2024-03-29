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
import Select, { components } from 'react-select';

const StyledWrapper = styled.div`
  padding: 25px 50px 135px 70px;
  height: 90vh;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  margin-bottom: 10px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
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
  width: 30%;
`

const StyledFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  gap: 0 20px;
`

const StyledWrapperArchive = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledButtonArchive = styled(Button)`
  width: 100;
  justify-self: center;
  margin-top: -10px;
`

const GridTemplate = ({path, notes, countNotes, archiveNote, countArchiveNote, blogs, tags }) => {
  const [visibleBar, setVisibleBar] = useState(false);
  const [withArchive, setWithArchive] = useState(false);
  const [searchTag, setSearchTag] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const [change, setChange] = useState(false);
  const [lengthTagFilter, setLengthTagFilter] = useState(0);

  const handleChangeTagSelect = (newValue) => {
    // console.log(newValue[newValue.length-1].value) // OK
    setChange(true);
    // setAddFilter(newValue.map((i) => i.value));
    // setSearchTag(searchTag.concat(addFilter));
    // setSearchTag(searchTag.concat((newValue[newValue.length-1].value)));
    // setSearchTag(newValue[newValue.length-1].value);
    setFilterOptions(newValue);
  };

  const handleSearchName = (e) => {
    setSearchName(e.target.value.toUpperCase());

  }

  const handleNewElementBarToggle = () => {
    setVisibleBar(state => !state)
  }

  const hideAddBar = () => {
    visibleBar ? setVisibleBar(false) : setVisibleBar(false)
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
      const NoOptionsMessage = props => {
        return (
           <components.NoOptionsMessage {...props}>
              Maximum 3 filters
           </components.NoOptionsMessage>
        );
      };

      return(
        <>  
          <StyledFilterBar>
            <Input search placeholder="Search blog" value={searchName} onChange={handleSearchName}/>
            {(searchTag.length > 2) ? (
              <StyledReactSelect value={filterOptions}  isMulti onChange={handleChangeTagSelect} components={{ NoOptionsMessage }}      />
            ) : (
              <StyledReactSelect 

              value={filterOptions}  isMulti options={tags} onChange={handleChangeTagSelect}   
              />
            )
            }
            {/* <Input search placeholder="Search tag" value={searchTag} onChange={handleSearchTag}/> */}
          </StyledFilterBar>
        </>
      )
    }
    if (path === 'note'){
      return(
        <StyledWrapperArchive>
          <Input search placeholder="Search note" value={searchName} onChange={handleSearchName}/>
          <StyledButtonArchive onClick={hideArchive}> {withArchive ? 'Archive' : 'Actuall'}  </StyledButtonArchive>
          {/* <input type="checkbox" checked={withArchive}/> */}
        </StyledWrapperArchive>
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
    <UserPageTemplate>
      <StyledWrapper onClick={hideAddBar}>
        <StyledPageHeader>
          {determinePathSearch(path)}
          <StyledHeading big as="h1"> 
              {path} 
          </StyledHeading >
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