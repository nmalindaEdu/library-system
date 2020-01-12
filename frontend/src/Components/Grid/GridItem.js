import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  grid: {
    padding: '0 15px 15px',
    margin: '0',
  },
}));

const GridItem = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

GridItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
GridItem.defaultProps = {
  children: undefined,
};
export default GridItem;
