import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  linkStyle: {
    fontWeight: 600,
    fontSize: '.8125rem',
    // color: '#1a2138',
    '&:hover': {
      color: 'inherit'
    }
  }
}));
const ListItemTexts = ({ primary }) => {
  const classes = useStyles();
  return (
    <ListItemText
      primary={primary}
      classes={{ primary: classes.linkStyle, selected: classes.selected }}
    />
  );
};

ListItemTexts.propTypes = {
  primary: PropTypes.string.isRequired
};
export default ListItemTexts;
