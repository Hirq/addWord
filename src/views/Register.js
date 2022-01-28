import React from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Heading from 'components/atoms/Heading'
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

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

const StyledLoginArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  justify-items: center;
`
// 1 2
// 3 4
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



const StyledHeading = styled(Heading)`
  text-align: center;
`

const Register = () => {
  return(
    <ListTemplate>
      <StyledBox>
        <StyledHeading> Register </StyledHeading>
        <StyledLoginArea>
            <Item1><Paragraph>Login</Paragraph></Item1>
            <Item2><Input placeholder='LOGIN'/></Item2>
            <Item3><Paragraph>Password</Paragraph></Item3>
            <Item4><Input placeholder='PASSWORD'/></Item4>
            <Item5><Paragraph>LoPasswordgin</Paragraph></Item5>
            <Item6><Input placeholder='PASSWORD'/></Item6>
        </StyledLoginArea>
        <Button>LOGIN / Register</Button>
        <Button>LOG as TEST</Button>
        <Button>Create account / Login in</Button>

      </StyledBox>
      <StyledHeading> Parametr dodajemy do Register /\ i jak mamy login to widok loginu, a jak register to register - wszystko na 1 widoku, tylko dochodzi z prawej na cssach parametry i zmienia się napis login na register, w takiej formie ze ten 
          wyjezdza w gorym a ten wchodzi z dolu. - lub tez od prawej i jeszcze przycisk musi sie zmienic na odpowiedni  + mozliwosc zalogowania przy uzyciu test/test </StyledHeading>
    </ListTemplate>
  )
}

export default Register;