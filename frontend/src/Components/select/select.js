import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(2),
    width: '100%',
    // [theme.breakpoints.between('xs', 'md')]: {
    //   width: '100%',
    // },
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

const Select = ({ array, keyValue, MenuLabel, id, label, change, styles, newId }) => {
  const [values, setValues] = React.useState({
    attribName: newId,
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    event.preventDefault();
    change(event.target.value);
  };

  const classes = useStyles();

  return (
    <TextField
      select
      id={id}
      label={label}
      value={values.attribName}
      onChange={handleChange('attribName')}
      className={clsx(styles, classes.textField)}
      margin="normal"
      variant="outlined"
      classes={{ root: classes.test }}
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}>
      {array.map((option) => (
        <MenuItem key={option[keyValue]} value={option[keyValue].toString()}>
          {option[MenuLabel]}
        </MenuItem>
      ))}
    </TextField>
  );
};
Select.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyValue: PropTypes.string.isRequired,
  MenuLabel: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  styles: PropTypes.string,
  newId: PropTypes.string,
};
Select.defaultProps = {
  styles: undefined,
  newId: undefined,
};
export default Select;
