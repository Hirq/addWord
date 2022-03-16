import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import { db } from '../firebase-config'; 
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const StyledParahraphLogin= styled(Paragraph)`
  font-size: 20px;
  margin: 0;
  padding: 5px;
`
const StyledBoxLogin = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.2fr;
  grid-template-rows: 40px 100px;
  grid-gap: 10px;
  align-items: start;;
`
const StyledItem = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 5;
  align-self: center;
`
const StyledInput = styled(Input)`
  width: 220px;
`
const StyledButtonShowHide = styled(Button)`
  width: 100px;
`

const AdminPanel = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordNewRepeat, setPasswordNewRepeat] = useState('');
  const [hidden, setHidden] = useState(true);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {login: login, password: password});
    alert('You create new account login: ' + login);
    setTimeout(() => { 
      window.location.reload(false);
    }, 1)
  };

  const handleLogin = (e) => {
    setLogin(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handlePasswordNew = (e) => {
    setPasswordNew(e.target.value);
  }
  const handlePasswordNewRepeat = (e) => {
    setPasswordNewRepeat(e.target.value);
  }
  const handleHidden = () => {
    setHidden(state => !state)
  }

  const updateUser = async(user, newPassword, newPasswordRepeat) => {
    console.log(newPasswordRepeat, newPassword);
    if (newPassword === newPasswordRepeat) {
      const userDoc = doc(db, "users", user.id)
      const newFields = {password: newPassword}
      await updateDoc(userDoc, newFields);
      console.log('new password: ' + newPassword)
    }
  }

  const signIn = (loginUser, passwordUser) => {
    (users.find(user => user.login === loginUser && user.password === passwordUser) ? console.log('We have user: ' + loginUser) : console.log('I dont know user: ' + loginUser))
  }

  const deleteUser = async (id) => { 
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
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
      <Paragraph> Account count: {users.length} </Paragraph>
        {users.map((user) => (
          <div key={user.id}>
            {user.login} - {user.password} <Button secondary onClick={() => deleteUser(user.id)}> Delete user </Button> 
          </div>
        ))}
      
      <StyledBoxLogin>        
        <StyledParahraphLogin> Login </StyledParahraphLogin>
        <StyledInput value={login||''} placeholder="login" onChange={handleLogin}/>

        <StyledParahraphLogin>Password </StyledParahraphLogin>
        <StyledInput type={hidden ? "password" : "text"} value={password||''} placeholder="password" onChange={handlePassword}/>

        <StyledParahraphLogin>Password new </StyledParahraphLogin>
        <StyledInput type={hidden ? "password" : "text"} value={passwordNew||''} placeholder="password" onChange={handlePasswordNew}/>
        <StyledParahraphLogin>Password new repeat</StyledParahraphLogin>
        <StyledInput type={hidden ? "password" : "text"} value={passwordNewRepeat||''} placeholder="password" onChange={handlePasswordNewRepeat}/>

        <StyledItem>
          <StyledButtonShowHide onClick={handleHidden}> {hidden ? "SHOW PASS" : "HIDE PASS"} </StyledButtonShowHide>
          <StyledButtonShowHide onClick={createUser}> Add user </StyledButtonShowHide>
        </StyledItem>  
      </StyledBoxLogin>

    </ListTemplate>
  )
}

export default AdminPanel;