import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
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

var dateCurrent = new Date(),
today = dateCurrent.getFullYear() + '-' + (dateCurrent.getMonth() + 1) + '-' + dateCurrent.getDate();

const NewElementBar = ({ isVisible, addBlog, hideAddBar, addNote, path, action, id, notes, blogs, editBlog, editNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
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

  const handleSubmit = (e) => {
    if (action === 'Add'){
      e.preventDefault();
      setTitle('');
      setContent('');
      setTag('');
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
          const filter = options.filter(item => item.value.includes(i))
          setFilterOptions(filterOptions => filterOptions.concat(filter))

        })   
        setTag(filterOptions.map((i) => i.value + ' '));
      }
      if (path === 'note'){
        const data = notes.filter((notes) => notes.id === id)
        setTitle(data[0].title);
        setContent(data[0].content);
      }
    }
  }, [] );

  const determinePath = (path) => {
    if (action === 'Add'){
      if (path === 'blog'){
        return(
          <>
            <StyledReactSelect isMulti options={options} onChange={handleChangeTagSelect}/>
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
            <StyledReactSelect value={filterOptions}  isMulti options={options} onChange={handleChangeTagSelect}/>
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
            <StyledButtonSave onClick={() => editNote(
              id,
              title,
              content,
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
  const { notes, blogs } = state;
  return {
    notes,
    blogs
  };
}

const mapDispatchToProps = dispatch => ({
  addBlog: (blogContent) => dispatch(addBlogAction(blogContent)),
  addNote: (noteContent) => dispatch(addNoteAction(noteContent)),
  editBlog: (id, title, content, tag) => dispatch(editBlogAction(id, title, content, tag)),
  editNote: (id, title, content) => dispatch(editNoteAction(id, title, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewElementBar);
