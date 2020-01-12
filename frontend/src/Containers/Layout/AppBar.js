import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import { useAuth0 } from '../../auth0';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24
  },
  //   toolbarIcon: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'flex-end',
  //     padding: '0 8px',
  //     ...theme.mixins.toolbar
  //   },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    backgroundColor: '#fff',
    color: theme.text.primary,
    fontWeight: '400'
  },
  menuButton: {
    marginRight: 36
  },
  //   menuButtonHidden: {
  //     display: 'none'
  //   },
  title: {
    flexGrow: 1,
    fontSize: '1.65rem',
    fontWeight: 400,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.15rem'
    }
  },
  email: {
    color: theme.text.link,
    fontSize: '.875rem;',
    fontWeight: 800,
    textTransform: 'uppercase',
    lineHeight: '1.75rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderLeft: '1px solid #edf1f7',
    borderRight: '1px solid #edf1f7',
    marginRight: '.5rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  //   appBarSpacer: theme.mixins.toolbar,
  icon: {
    color: theme.icon.primary
  }
}));

const AppBars = ({ toggleDrawer }) => {
  const classes = useStyles();
  //   const { logout } = useAuth0();

  const handleLogout = () => {
    console.log('logout');

    // logout({ returnTo: process.env.REACT_APP_LOGOUT_RETURN_URL });
  };

  return (
    <AppBar position='sticky' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge='start'
          aria-label='Open drawer'
          onClick={toggleDrawer}
          classes={{ root: classes.icon }}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>

        <Typography
          component='h1'
          color='inherit'
          noWrap
          className={classes.title}>
          LMS Dashboard
        </Typography>
        <a href='#'>
          <Typography
            component='div'
            color='inherit'
            noWrap
            className={classes.email}>
            supportlms@gmail.com
          </Typography>
        </a>

        <IconButton color='inherit' onClick={handleLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

AppBars.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

export default AppBars;
