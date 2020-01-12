import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import CardContent from './CardContent';
import Card from './Card';

const useStyles = makeStyles(() => ({
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  card: {
    height: '100%',
  },
}));
const CardContainer = ({ children, className, contentClass }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.card, className)}>
      <CardContent className={clsx(classes.content, contentClass)}>{children}</CardContent>
    </Card>
  );
};

CardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  contentClass: PropTypes.string,
};
CardContainer.defaultProps = {
  className: undefined,
  contentClass: undefined,
};

export default CardContainer;
