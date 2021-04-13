import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';
import NewBlogBar from 'components/organisms/NewBlogBar';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  right: 10px;
  bottom: 10px; 
`


const GridTemplate = ({ children, name, countItem }) => {
  const [visibleBar, setVisibleBar] = useState(false);

  const handleNewBlogBarToggle = () => {
    setVisibleBar(state => !state)
  }

  const hideAddBar = () => {
    {visibleBar ? setVisibleBar(false) : setVisibleBar(false)}
  }

return (
  <UserPageTemplate >
    <StyledWrapper onClick={hideAddBar}>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {name}
        </StyledHeading>
        <StyledParagraph>{countItem}</StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
    <StyledButtonIcon onClick={handleNewBlogBarToggle}> + </StyledButtonIcon>
    <NewBlogBar isVisible={visibleBar} hideAddBar={hideAddBar}/>
  </UserPageTemplate>
)};

// GridTemplate.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// GridTemplate.defaultProps = {
//   pageType: 'notes',
// };

export default GridTemplate;