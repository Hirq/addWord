import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon';
// import { IconPlus } from 'assets/icons/IconPlus';

const StyledWrapper = styled.div`
  position: relative;
`

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  right: 10px;
  bottom: 10px; 
`

const BlogAddButton = () => {
  const [redirect, setRedirect] = useState(false);

  const handleAddClick = () => {
    setRedirect(state => !state)
  }

  return (
    <>
      <StyledWrapper>
        <StyledButtonIcon onClick={ handleAddClick }> 
           + 
        </StyledButtonIcon>
      </StyledWrapper>

    </>
  )
}

export default BlogAddButton;