import React from 'react';
import { FlapperSpinner } from 'react-spinners-kit';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlapperSpinner color="#36f" size={50} />
    </div>
  );
};

export default Loading;
