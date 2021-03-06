import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Leftbar from 'components/organisms/Leftbar';
import Topbar from 'components/organisms/Topbar';

const StyledWrapper = styled.div`
  padding: 35px 50px 15px 90px;
`;

const UserPageTemplate = ({ children, theme}) => {
  return(
    <>
    <StyledWrapper>
      <Topbar theme={theme} />
      <Leftbar theme={theme} />
      {children}
    </StyledWrapper>
    </>
  )
};

// UserPageTemplate.propTypes = {
//   children: PropTypes.element.isRequired,
//   pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
// };

// UserPageTemplate.defaultProps = {
//   pageType: 'notes',
// };

export default UserPageTemplate;