import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from './ListItemText';
import DrawerLink from './DrawerLink';
import { librarian } from '../../Config/routes';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    // height: '1000px',
    color: theme.text.secondary,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    height: '100%',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '93vh'
    },
    borderBottom: '1px solid #edf1f7'
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.between('xs', 'sm')]: {
      visibility: 'hidden'
      // transition: 'transform 0.9s ease-out',
    }
  },

  nested: {
    paddingLeft: theme.spacing(4)
  },

  icon: {
    color: 'inherit'
  },
  listPadding: {
    paddingTop: 0
  }
}));
const Drawers = ({ open }) => {
  const classes = useStyles();

  const getDrawer = () => {
    return librarian.map((drawer) => {
      return (
        <DrawerLink key={drawer.name} to={drawer.path}>
          <ListItemIcon className={classes.icon}>{drawer.icon}</ListItemIcon>
          <ListItemText primary={drawer.name} />
        </DrawerLink>
      );
    });
  };

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}>
      <Divider />
      <List classes={{ padding: classes.listPadding }}>{getDrawer()}</List>
    </Drawer>
  );
};

Drawers.propTypes = {
  open: PropTypes.bool.isRequired
};
export default Drawers;
