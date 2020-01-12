import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Match } from '@reach/router';

import ListItem from './ListItem';
import NavLink from '../../Components/NavLink/NavLink';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      color: theme.action.hover
    },
    color: theme.text.secondary
  },

  selected: {
    position: 'relative',
    backgroundColor: 'transparent !important',
    color: theme.action.active,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: '4px',
      background: '#36f'
    }
  }
}));

const DrawerLink = ({ to, children }) => {
  const styles = useStyles();

  return (
    <Match path={`${to}`}>
      {({ match }) => (
        <NavLink to={to}>
          <ListItem
            button
            classes={{ root: styles.root, selected: styles.selected }}
            selected={Boolean(match)}>
            {children}
          </ListItem>
        </NavLink>
      )}
    </Match>
  );
};

DrawerLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default DrawerLink;
