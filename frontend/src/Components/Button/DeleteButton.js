import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: { color: theme.icon.primary },
}));

const DeleteButton = ({ clicked }) => {
  const styles = useStyles();
  return (
    <IconButton onClick={clicked}>
      <Delete classes={{ root: styles.icon }} />
    </IconButton>
  );
};
DeleteButton.propTypes = {
  clicked: PropTypes.func,
};
DeleteButton.defaultProps = {
  clicked: undefined,
};
export default DeleteButton;
