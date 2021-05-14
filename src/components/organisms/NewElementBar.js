import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import { connect } from 'react-redux';
import { addBlog as addBlogAction, addNote as addNoteAction } from 'redux/actions';

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

var tags = [
  'Book',
  'Video',
  'Internet',
  'Story',
  'Diary',
  'Job',
  'Holiday',
  'Shopping',
];

var dateCurrent = new Date(),
today = dateCurrent.getFullYear() + '-' + (dateCurrent.getMonth() + 1) + '-' + dateCurrent.getDate();

const NewElementBar = ({ isVisible, addBlog, hideAddBar, addNote, path, action }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState(tags[Math.floor(Math.random() * tags.length)]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  }

  const handleChangeTag = (e) => {
    setTag(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setContent('');
    setTag('');
    hideAddBar();
  }

  const determinePath = (path) => {
    if (path === 'blog'){
      return(
        <>
        <StyledInput placeholder="tag" value={tag || ''} onChange={handleChangeTag}/>
        <StyledButtonSave onClick={() => addBlog({
            title: title,
            content: content,
            date: today,
            tag: tag,
          })
        }
      >
      Add {path}
      </StyledButtonSave>
      </>
      )
    }
    if (path === 'note') {
      return(
        <StyledButtonSave
        onClick={() =>
          addNote({
            title: title,
            content: content,
            date: today,
          })
        }
      >
      Add {path}
      </StyledButtonSave>
      )
    } 
  }
  return(
  <form onSubmit={handleSubmit}>

    <StyledWrapper isVisible={isVisible}>
    { action === 'Add' ?
    <>
      <Heading big> {action} {path} </Heading>
      <StyledButtonClose>X</StyledButtonClose>
      <StyledInput placeholder="title" value={title || ''} onChange={handleChangeTitle}/>
      <StyledTextArea as="textarea" placeholder="description" value={content || ''} onChange={handleChangeContent} />
      {determinePath(path)}
    </>
      : <h1>asdas</h1>
    }
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

const mapDispatchToProps = dispatch => ({
  addBlog: (blogContent) => dispatch(addBlogAction(blogContent)),
  addNote: (noteContent) => dispatch(addNoteAction(noteContent))
});

export default connect(null, mapDispatchToProps)(NewElementBar);
