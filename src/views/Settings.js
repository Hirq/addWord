import React, { useState } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import { connect } from 'react-redux';
import { addTag as addTagAction, removeTag as removeTagAction } from 'redux/actions';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30px 150px 300px;
  grid-gap: 10px;
`
const StyledBoxHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
`

const StyledParahraphHeader = styled(Paragraph)`
  font-size: 30px;
  font-weight: 600;
  margin:0;
`

const StyledParahraphLogin= styled(Paragraph)`
  font-size: 20px;
  margin: 0;
  padding: 5px;
`

const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledFlexLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`
const StyledBoxTag1 = styled.div`
  background-color: #0A56DF;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`
const StyledBoxTag2 = styled.div`
  background-color: #0A56DF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`
const StyledBoxLogin = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.2fr;
  grid-template-rows: 50px 100px;
  grid-gap: 10px;
  align-items: start;;
`


const StyledButton = styled(Button)`
  margin-left: auto;
  min-width: 105px;
  height: 25px;
`
const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`
const StyledLi = styled.li`
  display: flex;
  margin-left: 25px;
`
const Settings = ({tags, addTag, removeTag}) => {
  const [nameTag, setNameTag] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);

  const handleTagName = (e) => {
    setNameTag(e.target.value);
  }
  
  const handleLogin = (e) => {
    setLogin(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleHidden = () => {
    setHidden(state => !state)
  }


  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledBoxHeader>
          <StyledParahraphHeader>Account Panel</StyledParahraphHeader>
        </StyledBoxHeader>
        <StyledFlexCenter>
          <Paragraph>Basic</Paragraph>
        </StyledFlexCenter>
        <StyledBoxTag1>
          <StyledFlexCenter>
            <Paragraph>Tags</Paragraph>
          </StyledFlexCenter> 
          <StyledFlexCenter>
            <Input value={nameTag||''} placeholder="name tag" onChange={handleTagName}/>
          </StyledFlexCenter> 
          <StyledFlexCenter>
            <Button secondary onClick={() => addTag({
            value: nameTag,
            label: nameTag
            })}> ADD </Button>
          </StyledFlexCenter> 
        </StyledBoxTag1>
        <StyledFlexLogin> 
        
          <StyledBoxLogin>        
            <StyledParahraphLogin> Login </StyledParahraphLogin>
            <Input value={login||''} placeholder="login" onChange={handleLogin}/>
            <Button> SHOW </Button>
            <StyledParahraphLogin>Password </StyledParahraphLogin>
            <Input type={hidden ? "password" : "text"} value={password||''} placeholder="password" onChange={handlePassword}/>
            <Button onClick={handleHidden}> SHOW </Button>
          </StyledBoxLogin>

        </StyledFlexLogin>
        <StyledUl>
        <StyledBoxTag2>
          {tags.map((item) => 
            <StyledLi>{item.value} <StyledButton secondary onClick={() => removeTag(item.id)}> DELETE </StyledButton></StyledLi>
          )}
        </StyledBoxTag2>
        </StyledUl>

      </StyledWrapper>
    </ListTemplate>
  ) 
}

const mapStateToProps = state => {
  const { tags } = state;
  return { tags };
}

const mapDispatchToProps = dispatch => ({
  addTag: (value, label) => dispatch(addTagAction(value, label)),
  removeTag: (id) => dispatch(removeTagAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps )(Settings);