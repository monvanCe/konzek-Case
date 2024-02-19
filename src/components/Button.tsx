import React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  style,
  children,
  variant = 'default',
}) => {
  const textColor = variant === 'default' ? 'text-white' : 'text-black';
  const backgroundColor = variant === 'default' ? 'bg-black' : 'bg-white';
  const border = variant === 'text' ? 'border-0' : 'border border-black';

  return (
    <div
      onClick={onClick}
      style={{ ...style }}
      className={`h-full w-100 flex items-center justify-center rounded-full ${textColor} ${backgroundColor} ${border}`}
    >
      {children}
    </div>
  );
};
