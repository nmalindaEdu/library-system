/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  backdrop: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0,0.3)',
    zIndex: 200,
  },
}));

const BackDrop = ({ clicked }) => {
  const classes = useStyles();

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return <div className={classes.backdrop} onClick={clicked} />;
};
BackDrop.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default BackDrop;
