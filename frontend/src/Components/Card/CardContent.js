import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { default as MaterialCardContent } from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
  },
});

const CardContent = ({ classes, ...rest }) => {
  const styles = useStyles();
  return <MaterialCardContent classes={{ ...styles, ...classes }} {...rest} />;
};

CardContent.defaultProps = {
  classes: {},
};

CardContent.propTypes = {
  ...MaterialCardContent.propTypes,
};

export default CardContent;
