import React from 'react';
import { warningIcon } from '../assets/warningIcon';

const ErrorComponent = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="w-full aspect-square p-10">{warningIcon}</div>
      <div>Failed to retrieve data from server</div>
    </div>
  );
};

export default ErrorComponent;
