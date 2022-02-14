import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Heading from 'components/atoms/Heading'
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { db } from '../firebase-config'; 
import { collection, getDocs, addDoc } from "firebase/firestore";
import ButtonIcon from 'components/atoms/ButtonIcon'
import EyeIcon from 'assets/icons/eye-password.svg';

const StyledBox = styled.div`
  z-index: 0;
  position: absolute;
  width: 50%;
  height: 500px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: -1px 3px 166px 159px ${({theme}) => theme.colorBoxShadow};
  -webkit-box-shadow: -1px 3px 166px 159px ${({theme}) => theme.colorBoxShadow};
  -moz-box-shadow: -1px 3px 166px 159px ${({theme}) => theme.colorBoxShadow};
`

const StyledHeading = styled(Heading)`
  z-index: 1;
  text-align: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-left: 30px;
  top: 0;
  transform: translate(${({ isLogin }) => (isLogin ? '0' : '-100%')});
  transition: transform 0.75s ease-in-out;
  margin-top: 100px;
  margin-left: 0px;
`

const StyledHeading2 = styled(Heading)`
  z-index: 1;
  text-align: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-left: 30px;
  top: 0;
  transform: translate(${({ isLogin }) => (!isLogin ? '0' : '100%')});
  transition: transform 0.75s ease-in-out;
  margin-top: 100px;
  margin-left: 0px;
`

const StyledLoginArea = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  justify-items: center;
`
// 1 2
// 3 4 7
// 5 6
const Item1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: right;
`
const Item2 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: left;
  align-self: center;
`
const Item3 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: right;
`
const Item4 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: left;
  align-self: center;
  display: inline-flex;
`
const Item5 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: right;
`
const Item6 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: left;
  align-self: center;
`

const StyledButtonsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.05fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
`

const SyledButtonLeft = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: right;
`

const SyledButtonRight = styled(Button)`
  grid-column-start: 3;
  grid-column-end: 4;
  justify-self: left;
`

const StyledButtonLoginAsTest = styled(Button)`
  width: 150px;
  height: 25px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -75px;
`

const StyledEyeButton = styled(ButtonIcon)`
  width: 35px;
  height: 35px;
`;

const Register = () => {
  const [isLogin, setIsLogn] = useState(true); // Login TRUE : Resgiter FALSE
  const [hidden, setHidden] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // const Header = document.querySelectorAll(StyledHeading);

  const handleButtonAction = () => {
    setIsLogn(state => !state);
  }
  const handleHidden = () => {
    setHidden(state => !state)
  }

  const handleLogin = (e) => {
    setLogin(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handlePasswordNew = (e) => {
    setPasswordNew(e.target.value);
  }

  const createUser = async () => {
    if ((password === passwordNew) && (login !== '')) {
      await addDoc(usersCollectionRef, {login: login, password: password});
      alert('You create new account login: ' + login);
      console.log('1');
    }
    else {
      if (password !== passwordNew) {
        alert('These passwords not same: ' + login);
        console.log('2');
      }
      else if (login === '') {
        alert('Login is empty: ' + login);
        console.log('3');
      } 
    }
    setTimeout(() => { 
      window.location.reload(false);
    }, 1)
  };

  const signIn = (loginUser, passwordUser) => {
    (users.find(user => user.login === loginUser && user.password === passwordUser) ? console.log('We have user: ' + loginUser) : console.log('I dont know user: ' + loginUser))
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers()
  }, [])

  return(
    <>
    <StyledHeading big isLogin={isLogin}> Login </StyledHeading>
    <StyledHeading2 big isLogin={isLogin}> Register </StyledHeading2>
    <ListTemplate>
      <StyledBox>
        <StyledLoginArea>
            <Item1><Paragraph>Login</Paragraph></Item1>
            <Item2><Input value={login||''} placeholder="LOGIN" onChange={handleLogin}/></Item2>
            <Item3><Paragraph>Password</Paragraph></Item3>
            <Item4>
              <Input type={hidden ? "password" : "text"} value={password||''} placeholder="password" onChange={handlePassword}/>
              <StyledEyeButton visible icon={EyeIcon} onClick={handleHidden}/>
            </Item4>
            {isLogin ? null : 
              <>
                <Item5><Paragraph>Password</Paragraph></Item5>
                <Item6><Input type={hidden ? "password" : "text"} value={passwordNew||''} placeholder="password" onChange={handlePasswordNew}/></Item6>
              </>
            }
        </StyledLoginArea>
        <StyledButtonsArea>
          <SyledButtonLeft onClick={handleButtonAction}> GO TO {isLogin  ? "REGISTER": "LOGIN"}</SyledButtonLeft>
          {isLogin 
            ? <SyledButtonRight onClick={() => signIn(login, password)}>Login in</SyledButtonRight>
            : <SyledButtonRight onClick={createUser}>Create account</SyledButtonRight>
          }
      </StyledButtonsArea>
      <StyledButtonLoginAsTest onClick={() => signIn('test', 'test')}>LOG as TEST</StyledButtonLoginAsTest>
      </StyledBox>
    </ListTemplate>
    </>
  )
}

export default Register;