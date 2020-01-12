import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../Components/Theme';
import BaseLayout from './BaseLayout';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>{children}</BaseLayout>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  ...BaseLayout.propTypes
};

export default Layout;
