import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import { connect } from 'react-redux';
import { addTag as addTagAction, removeTag as removeTagAction } from 'redux/actions';

import { db } from '../firebase-config'; 
import { collection, getDocs, addDoc } from "firebase/firestore";

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
  justify-content: start;
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
const StyledItem = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  align-self: center;
`
const StyledButtonDeleteTag = styled(Button)`
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
const StyledInput = styled(Input)`
  width: 220px;
`
const StyledButtonShowHide = styled(Button)`
  width: 100px;
`

const StyledBoxAccounts = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`

const Settings = ({tags, addTag, removeTag}) => {
  const [nameTag, setNameTag] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);

  
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {login: login, password: password});
  };

  const signIn = () => {
    (users.find(user => user.login === login) ? console.log('We have user: ' + login) : console.log('I dont know user: ' + login))
  }

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

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers()
  }, [])


  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledBoxHeader>
          <StyledParahraphHeader>Account Panel</StyledParahraphHeader>
        </StyledBoxHeader>
        <StyledFlexCenter>
          <StyledBoxAccounts>
            {users.map((user) => (
              <div>
               {user.login} - {user.password} 
              </div>
            ))}
          </StyledBoxAccounts>
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
            <StyledInput value={login||''} placeholder="login" onChange={handleLogin}/>

            <StyledParahraphLogin>Password </StyledParahraphLogin>
            <StyledInput type={hidden ? "password" : "text"} value={password||''} placeholder="password" onChange={handlePassword}/>
            <StyledItem>
              <StyledButtonShowHide onClick={handleHidden}> {hidden ? "SHOW" : "HIDE"} </StyledButtonShowHide>
              <StyledButtonShowHide onClick={createUser}> Add user </StyledButtonShowHide>
              <StyledButtonShowHide onClick={signIn}> Sign in </StyledButtonShowHide>
            </StyledItem>  
          </StyledBoxLogin>

        </StyledFlexLogin>
        <StyledUl>
        <StyledBoxTag2>
          {tags.map((item) => 
            <StyledLi>{item.value} <StyledButtonDeleteTag secondary onClick={() => removeTag(item.id)}> DELETE </StyledButtonDeleteTag></StyledLi>
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