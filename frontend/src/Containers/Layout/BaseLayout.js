import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Footer from '../../Components/Footer/Footer';
import AppBar from './AppBar';
import Drawer from './Drawer';
import Spinner from '../../Components/Spinner/Spinner';
import BackDrop from '../../Components/BackDropSpinner/BackDropSpinner';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    backgroundColor: '#edf1f7',
    flexGrow: 1,
    height: '93vh',
    overflow: 'auto',
    [theme.breakpoints.between('xs', 'sm')]: {
      position: 'fixed',
      width: '100%'
    }
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    marginBottom: '.5rem',
    '& p': {
      marginTop: '5px',
      marginBottom: '10px',
      padding: '20px'
    },
    marginRight: 0,
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%'
    },
    minHeight: '82vh'
  }
}));

const BaseLayout = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth <= 800;
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleDrawerHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <AppBar toggleDrawer={toggleDrawer} />
      <div className={classes.root}>
        <Drawer open={open} />
        {open === true && isMobile ? (
          <BackDrop clicked={toggleDrawerHandler} mobile />
        ) : null}
        <main className={classes.content}>
          <Container maxWidth='lg' className={classes.container}>
            <Suspense fallback={<Spinner height='650px' />}>
              {children}
            </Suspense>
          </Container>
          <Footer />
        </main>
      </div>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired
};

export default BaseLayout;
