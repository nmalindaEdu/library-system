import React from 'react';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.action.active
  }
}));

const NavLink = (props) => {
  const classes = useStyles();
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? classes.active : null
        };
      }}
    />
  );
};

export default NavLink;
