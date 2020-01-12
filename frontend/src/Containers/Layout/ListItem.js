import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  listItems: {
    borderBottom: '1px solid #edf1f7',
    '&:hover, & > *:hover': {
      backgroundColor: 'transparent',
      color: theme.action.hover,
      cursor: 'pointer'
    }
  }
}));

const EnhancedListItem = (props) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItems} disableTouchRipple {...props} />
  );
};

export default EnhancedListItem;
