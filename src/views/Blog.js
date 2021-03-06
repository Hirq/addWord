import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate'
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';

const StyledButton = styled(Button)`

`;

const Blog = () => {
  return (
  <UserPageTemplate >
    <Paragraph> padding - do tekstow i linków jak chcemy zrobić z 'a' buttona  - marign do odsuwania miedzy soba elementow</Paragraph>
    <Paragraph> blog1111111111111111111111111111111111111111111111111111</Paragraph>
    <Paragraph> blog1111111111111111111111111111111111111111111111111111</Paragraph>
    <Paragraph> blog1111111111111111111111111111111111111111111111111111</Paragraph>
    <Paragraph> blog1111111111111111111111111111111111111111111111111111</Paragraph>
    <Paragraph> 22222222222222222222222222as22222222222222222222222222222222222222222</Paragraph>
    <StyledButton> Kliknij</StyledButton>
    <StyledButton secondary> Kliknij</StyledButton>
  </UserPageTemplate>
  )
}

export default Blog;