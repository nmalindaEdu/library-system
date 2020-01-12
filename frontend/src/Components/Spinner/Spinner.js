import React from 'react';
import PropTypes from 'prop-types';
import { FlapperSpinner } from 'react-spinners-kit';

const Spinner = ({ size, height }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height
      }}>
      <FlapperSpinner size={size} color='#36f' />
    </div>
  );
};
Spinner.propTypes = {
  size: PropTypes.number,
  height: PropTypes.string
};
Spinner.defaultProps = {
  size: 60,
  height: 'inherit'
};
export default Spinner;
