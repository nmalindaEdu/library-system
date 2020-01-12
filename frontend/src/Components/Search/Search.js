import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),

    backgroundColor: 'white',
    fontFamily: theme.typography.fontFamily,
    fontSize: '.9375rem',
    fontWeight: '600',
    lineHeight: '1.5rem',
    borderRadius: '.25rem',
    // '&:focus': {
    //   boxShadow: '0 0 0 0.375rem blue',
    // },
    '& fieldset': {
      borderColor: 'white',
      boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    },
  },
  icon: {
    color: theme.icon.primary,
  },
  labelRoot: {
    [theme.breakpoints.between('xs', 'md')]: {
      fontSize: '.4375rem',
    },
  },
  test: {
    '& label.Mui-focused': {
      color: '#36f',
    },
    '& label.Mui-error': {
      color: '#ff3d71',
    },
    '& .MuiOutlinedInput-root': {
      // '& fieldset': {
      //   borderColor: 'red',
      // },
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      '&.Mui-focused fieldset': {
        borderColor: '#36f',
      },
      '&.Mui-error fieldset': {
        borderColor: '#ff3d71',
      },
    },
  },
}));

const SearchTextField = ({ label, change, input, keyPress, styles, onBlur, value, isTextCss }) => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-search"
      label={label}
      type="search"
      // autoFocus
      className={clsx(styles, isTextCss ? classes.textField : null)}
      value={value}
      onBlur={onBlur}
      margin="normal"
      variant="outlined"
      onChange={change}
      inputRef={input}
      onKeyPress={keyPress}
      classes={{ root: classes.test }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search classes={{ root: classes.icon }} />
          </InputAdornment>
        ),
      }}
    />
  );
};
SearchTextField.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func,
  input: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Object)]),
  keyPress: PropTypes.func,
  styles: PropTypes.string,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  isTextCss: PropTypes.bool,
};
SearchTextField.defaultProps = {
  change: undefined,
  input: null,
  keyPress: undefined,
  onBlur: undefined,
  styles: undefined,
  value: undefined,
  isTextCss: false,
};

export default SearchTextField;
