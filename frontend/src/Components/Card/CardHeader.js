import React from 'react';
import { default as MaterialCardHeader } from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    borderBottom: '1px solid #edf1f7',
    borderTopLeftRadius: '.25rem',
    borderTopRightRadius: '.25rem',
    padding: '.5rem 1.25rem',
    // width: '100%',
  },
  title: {
    fontSize: '.9375rem',
    fontWeight: 600,
    lineHeight: '1.5rem',
  },
  subHeader: {
    fontSize: '1.2rem',
    color: '#8f9bb3',
    lineHeight: '1.5rem',
  },
  action: {
    alignSelf: 'center',
    // padding: '.5rem 0rem',
    height: '15px',
  },
});

const CardHeader = ({ classes, ...rest }) => {
  const styles = useStyles();

  return (
    <MaterialCardHeader
      classes={{
        root: styles.root,
        title: styles.title,
        subheader: styles.subHeader,
        action: styles.action,
        ...classes,
      }}
      {...rest}
    />
  );
};

CardHeader.defaultProps = {
  classes: {},
};

CardHeader.propTypes = {
  ...MaterialCardHeader.propTypes,
};

export default CardHeader;
