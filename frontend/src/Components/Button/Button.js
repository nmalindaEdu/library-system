import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { default as MaterialButton } from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  btnPrimary: {
    color: '#fff',
    backgroundColor: theme.button.primary,
    '&:hover': {
      backgroundColor: theme.buttonHover.primary,
    },
    '&:active': {
      backgroundColor: theme.buttonActive.primary,
    },
  },
  btnSuccess: {
    color: '#fff',
    backgroundColor: theme.button.success,
    '&:hover': {
      backgroundColor: theme.buttonHover.success,
    },
    '&:active': {
      backgroundColor: theme.buttonActive.success,
    },
  },
  btnInfo: {
    color: '#fff',
    backgroundColor: theme.button.info,
    '&:hover': {
      backgroundColor: theme.buttonHover.info,
    },
    '&:active': {
      backgroundColor: theme.buttonActive.info,
    },
  },
  btnWarning: {
    color: '#fff',
    backgroundColor: theme.button.warning,
    '&:hover': {
      backgroundColor: theme.buttonHover.warning,
    },
    '&:active': {
      backgroundColor: theme.buttonActive.warning,
    },
  },
  btnDanger: {
    color: '#fff',
    backgroundColor: theme.button.danger,
    '&:hover': {
      backgroundColor: theme.buttonHover.danger,
    },
    '&:active': {
      backgroundColor: theme.buttonActive.danger,
    },
  },
  button: {
    margin: '.5rem',
  },
}));

const Button = (props) => {
  const classes = useStyles();
  const { primary, success, info, warning, danger } = props;
  const useClass = () => {
    if (primary) {
      return classes.btnPrimary;
    }
    if (success) {
      return classes.btnSuccess;
    }
    if (info) {
      return classes.btnInfo;
    }
    if (warning) {
      return classes.btnWarning;
    }
    if (danger) {
      return classes.btnDanger;
    }
    return null;
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MaterialButton {...props} disableRipple className={clsx(useClass(), classes.button)} />;
};

Button.propTypes = {
  ...MaterialButton.propTypes,
};

export default Button;
