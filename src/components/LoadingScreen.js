import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="loader-circle"></div>
        <p className="loader-text">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
