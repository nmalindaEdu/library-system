import React from 'react';
import { Router } from '@reach/router';
import { makeStyles } from '@material-ui/core';

import Layout from './Containers/Layout';
// import Loading from './Components/Loading/Loading';
import { SnackbarProvider } from 'notistack';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: '#fff',
    color: '#43a047',
    border: '2px solid #43a047',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    borderRadius: '.25rem',
    marginBottom: '7rem',
    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '7rem'
    }
  },
  error: {
    backgroundColor: '#fff',
    color: '#d32f2f',
    border: '2px solid #d32f2f',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    borderRadius: '.25rem',
    marginBottom: '7rem',
    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '7rem'
    }
  },
  warning: {
    backgroundColor: '#fff',
    color: '#ffa000',
    border: '2px solid #ffa000',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    borderRadius: '.25rem',
    marginBottom: '7rem',
    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '7rem'
    }
  },
  info: {
    backgroundColor: '#fff',
    color: '#2979ff',
    border: '2px solid #2979ff',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    borderRadius: '.25rem',
    marginBottom: '7rem',
    [theme.breakpoints.between('xs', 'md')]: {
      marginBottom: '7rem'
    }
  }
}));

const App = () => {
  const classes = useStyles();

  const Dashboard = React.lazy(() =>
    import('./Containers/Dashboard/Dashboard')
  );

  return (
    <Router>
      <Layout path='/'>
        <SnackbarProvider
          maxSnack={1}
          hideIconVariant={false}
          dense={false}
          classes={{
            variantSuccess: classes.success,
            variantError: classes.error,
            variantWarning: classes.warning,
            variantInfo: classes.info
          }}>
          <Dashboard path='/' />
        </SnackbarProvider>
      </Layout>
    </Router>
  );
};

export default App;
