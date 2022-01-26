import React from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Heading from 'components/atoms/Heading'

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

const Register = () => {
  return(
    <ListTemplate>
      <StyledBox>
        <StyledHeading> Register </StyledHeading>
        <StyledHeading> Parametr dodajemy do Register /\ i jak mamy login to widok loginu, a jak register to register - wszystko na 1 widoku, tylko dochodzi z prawej na cssach parametry i zmienia się napis login na register, w takiej formie ze ten 
          wyjezdza w gorym a ten wchodzi z dolu. - lub tez od prawej i jeszcze przycisk musi sie zmienic na odpowiedni  + mozliwosc zalogowania przy uzyciu test/test </StyledHeading>
      </StyledBox>
    </ListTemplate>
  )
}

export default Register;