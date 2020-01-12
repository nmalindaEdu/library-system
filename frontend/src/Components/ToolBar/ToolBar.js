import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    borderRadius: '.25rem',
  },
}));

const ToolbarBox = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Toolbar>{children}</Toolbar>
    </div>
  );
};

ToolbarBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default ToolbarBox;
