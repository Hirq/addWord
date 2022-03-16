import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Heading from 'components/atoms/Heading';
import { connect } from 'react-redux';
import { addBlog as addBlogAction, addNote as addNoteAction, editBlog as editBlogAction, editNote as editNoteAction } from 'redux/actions';

const StyledWrapper = styled.div`
  background-color: ${({theme}) => theme.topBar};;
  border-left: 10px solid ${({ theme }) => theme.colorBorder};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 10px 0 10px;
  border-radius: 20px;
  height: 30vh;
  width: 500px;
`;

const StyledInput = styled(Input)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledButtonSave = styled(Button)`
  margin-top: 20px;
`

const StyledButtonClose = styled(Button)`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 25px;
  height: 25px;
  background-color: ${(theme) => theme.activeIconColor};
`

const StyledButtonClose2 = styled(ButtonIcon)`
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

var dateCurrent = new Date(),
today = dateCurrent.getFullYear() + '-' + (dateCurrent.getMonth() + 1) + '-' + dateCurrent.getDate();

const NewElementBar = ({ isVisible, addBlog, hideAddBar, addNote, path, action, id, notes, blogs, editBlog, editNote, tags }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [archived, setArchived] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  const handleChangeTagSelect = (newValue, actionMeta) => {
    console.log(newValue.map((i) => i.value));
    console.log(`action: ${actionMeta.action}`);
    setTag(newValue.map((i) => i.value));
    setFilterOptions(newValue);
  };

  const handleChangeArchived = () => {
    setArchived(state => !state)
  }

  const handleSubmit = (e) => {
    if (action === 'Add'){
      e.preventDefault();
      setTitle('');
      setContent('');
      setTag('');
      setArchived(false);
      hideAddBar();
    }
    if (action === 'Edit'){
      e.preventDefault();
      hideAddBar();
    }
  }

  useEffect(() => {
    if (action === 'Edit'){
      if (path === 'blog'){
        const data = blogs.filter((blogs) => blogs.id === id)
        setTitle(data[0].title);
        setContent(data[0].content);
        data[0].tag.map((i) =>
        {
          const filter = tags.filter(item => item.value.includes(i))
          setFilterOptions(filterOptions => filterOptions.concat(filter))
        })   
        setTag(filterOptions.map((i) => i.value + ' '));
      }
      if (path === 'note'){
        const data = notes.filter((notes) => notes.id === id)
        setTitle(data[0].title);
        setContent(data[0].content);
        setArchived(data[0].archived);
      }
    }
  }, [] );

  const determinePath = (path) => {
    if (action === 'Add'){
      if (path === 'blog'){
        return(
          <>
            <StyledReactSelect isMulti options={tags} onChange={handleChangeTagSelect}/>
            <StyledButtonSave onClick={() => addBlog({
                title: title,
                content: content,
                date: today,
                tag: tag,
              })}
            >
            {action} {path}
            </StyledButtonSave>
          </>
        )
      }
      if (path === 'note') {
        return(
          <>
            <StyledButtonSave onClick={() => addNote({
                title: title,
                content: content,
                date: today,
                archived: false,
              })}
            >
            {action} {path}
            </StyledButtonSave>
          </>
        )
      } 
    }
    if (action === 'Edit'){
      if (path === 'blog'){
        return(
          <>
            <StyledReactSelect value={filterOptions}  isMulti options={tags} onChange={handleChangeTagSelect}/>
            <StyledButtonSave onClick={() => editBlog(
              id,
              title,
              content,
              tag,
              )}
            >
            {action} {path}
            </StyledButtonSave>
          </>
        )
      }
      if (path === 'note') {
        return(
          <>
            <p>Archived<input type="checkbox" checked={archived} onChange={handleChangeArchived}/>
            </p> 
            <StyledButtonSave onClick={() => editNote(
              id,
              title,
              content,
              archived,
            )}
            >   
            {action} {path}
            </StyledButtonSave>
          </>
        )
      } 
    }
  }
  
  return(
  <form onSubmit={handleSubmit}>
    <StyledWrapper isVisible={isVisible}>
      <Heading big> {action} {path} </Heading>
      <StyledButtonClose>X</StyledButtonClose>
      <StyledInput placeholder="title" value={title || ''} onChange={handleChangeTitle}/>
      <StyledTextArea as="textarea" placeholder="description" value={content || ''} onChange={handleChangeContent} />
      {determinePath(path)}
      <StyledButtonClose2>CLOSE</StyledButtonClose2>
    </StyledWrapper>
  </form>

)};

// NewItemBar.propTypes = {
//   pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
//   isVisible: PropTypes.bool,
//   addItem: PropTypes.func.isRequired,
// };

// NewItemBar.defaultProps = {
//   pageContext: 'notes',
//   isVisible: false,
// };

const mapStateToProps = ( state ) => {
  const { notes, blogs, tags } = state;
  return {
    notes,
    blogs,
    tags
  };
}

const mapDispatchToProps = dispatch => ({
  addBlog: (blogContent) => dispatch(addBlogAction(blogContent)),
  addNote: (noteContent) => dispatch(addNoteAction(noteContent)),
  editBlog: (id, title, content, tag) => dispatch(editBlogAction(id, title, content, tag)),
  editNote: (id, title, content, archived) => dispatch(editNoteAction(id, title, content, archived)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewElementBar);
