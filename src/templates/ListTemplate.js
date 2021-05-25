import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 30px 30px 100px 30px;
`

const ListTemplate = ({children}) => {
  return(
    <UserPageTemplate>
      <StyledWrapper> 
        {children}
      </StyledWrapper>
    </UserPageTemplate>
  )
}

export default ListTemplate;