import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { routes } from 'routes';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 7vw;
  height: 100vh;
  padding: 0 25px;
  background-color: ${({ theme }) => theme.leftBar};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 105px;
  height: 106px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
  margin-top: -10px;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Leftbar = () => {
  return(
    <StyledWrapper>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to={routes.list} icon={penIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.blog} icon={twitterIcon} activeclass="active" />
        </li>
        <li>
          <ButtonIcon as={NavLink} to={routes.note} icon={bulbIcon} activeclass="active" />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  );
}
// Leftbar.propTypes = {
//   pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
// };

// Leftbar.defaultProps = {
//   pageType: 'notes',
// };

export default Leftbar;