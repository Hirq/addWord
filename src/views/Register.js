import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Heading from 'components/atoms/Heading'
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import { db } from '../firebase-config'; 
import { collection, doc, getDocs, addDoc } from "firebase/firestore";
import ButtonIcon from 'components/atoms/ButtonIcon'
import EyeIcon from 'assets/icons/eye-password.svg';

const StyledBox = styled.div`
  position: absolute;
  width: 50%;
  height: 500px;
  background-color: red;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const StyledLoginArea = styled.div`
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
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
  background-color: red;
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

  const handleButtonAction = () => {
    setIsLogn(state => !state)
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
    <ListTemplate>
      <StyledBox>
        <StyledHeading> {isLogin ? "Login" : "Register"} </StyledHeading>
        <StyledLoginArea>
            <Item1><Paragraph>Login</Paragraph></Item1>
            <Item2><Input value={login||''} placeholder="LOGIN" onChange={handleLogin}/></Item2>
            <Item3><Paragraph>Password</Paragraph></Item3>
            <Item4>
              <Input type={hidden ? "password" : "text"} value={password||''} placeholder="password" onChange={handlePassword}/>
              <StyledEyeButton icon={EyeIcon} onClick={handleHidden}/>
            </Item4>
            {isLogin ? null : 
              <>
                <Item5><Paragraph>LoPasswordgin</Paragraph></Item5>
                <Item6><Input type={hidden ? "password" : "text"} value={passwordNew||''} placeholder="password" onChange={handlePasswordNew}/></Item6>
              </>
            }
        </StyledLoginArea>
        <StyledButtonsArea>
          <Button onClick={handleButtonAction}> GO TO {isLogin  ? "REGISTER": "LOGIN"}</Button>
          {isLogin 
            ? <Button onClick={() => signIn(login, password)}>Login in</Button>
            : <Button onClick={createUser}>Create account</Button>
          }
      </StyledButtonsArea>
      <StyledButtonLoginAsTest onClick={() => signIn('test', 'test')}>LOG as TEST</StyledButtonLoginAsTest>
      </StyledBox>
      <StyledHeading> Parametr dodajemy do Register /\ i jak mamy login to widok loginu, a jak register to register - wszystko na 1 widoku, tylko dochodzi z prawej na cssach parametry i zmienia się napis login na register, w takiej formie ze ten 
          wyjezdza w gorym a ten wchodzi z dolu. - lub tez od prawej i jeszcze przycisk musi sie zmienic na odpowiedni  + mozliwosc zalogowania przy uzyciu test/test </StyledHeading>
    </ListTemplate>
  )
}

export default Register;