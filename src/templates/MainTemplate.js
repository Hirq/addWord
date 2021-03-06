import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'theme/mainTheme';
import { useTheme } from 'theme/ThemeContext';

const MainTemplate = ({ children }) => {
  const setDarkMode = useTheme();

  return(
      <ThemeProvider theme={setDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
          {children}
      </>
      </ThemeProvider>
  )
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;