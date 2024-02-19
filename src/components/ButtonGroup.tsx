import React from 'react';
import { Button } from './Button';
import { ButtonGroupProps } from './types';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onClick,
  onClick2,
}) => {
  return (
    <div className="h-full w-full flex justify-end">
      <div className="w-2/6 h-full p-2">
        <Button variant="outline" onClick={onClick}>
          List Countries
        </Button>
      </div>
      <div className="w-2/6 h-full p-2">
        <Button variant="outline" onClick={onClick2}>
          List Languages
        </Button>
      </div>
    </div>
  );
};
