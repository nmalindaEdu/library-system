import React from 'react';
import clsx from 'clsx';
import { default as MaterialCard } from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 0.5rem 1rem 0 rgba(44, 51, 73, .1)',
    border: '0 solid transparent',
    borderRadius: '.25rem',
    marginBottom: '1.875rem',
    padding: '.5rem',
  },
});

const Card = ({ className, children, ...rest }) => {
  const classes = useStyles();
  const cardStyles = clsx([{ [classes.card]: true, [className]: className !== undefined }]);
  return (
    <MaterialCard className={cardStyles} {...rest}>
      {children}
    </MaterialCard>
  );
};

Card.defaultProps = {
  children: undefined,
  className: undefined,
};

Card.propTypes = {
  ...MaterialCard.propTypes,
};

export default Card;
