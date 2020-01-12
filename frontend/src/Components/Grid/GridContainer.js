import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    margin: '0 -15px !important',
    width: 'unset',
  },
};

const GridContainer = (props) => {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default withStyles(style)(GridContainer);
