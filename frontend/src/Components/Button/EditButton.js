import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core';
import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles((theme) => ({
  icon: { color: theme.icon.primary },
}));

const EditButton = ({ to, clicked }) => {
  const styles = useStyles();
  return (
    <NavLink to={to}>
      <IconButton onClick={clicked}>
        <Edit classes={{ root: styles.icon }} />
      </IconButton>
    </NavLink>
  );
};

EditButton.propTypes = {
  to: PropTypes.string,
  clicked: PropTypes.func,
};

EditButton.defaultProps = {
  to: undefined,
  clicked: undefined,
};

export default EditButton;
