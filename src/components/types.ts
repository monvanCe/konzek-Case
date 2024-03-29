import { Dispatch, SetStateAction } from 'react';
import { StatusObjects } from '../HOCs/types';

export interface StateComponentProps {
  stateName: string;
  stateStatus: StatusObjects;
  setStateStatus: Dispatch<SetStateAction<StatusObjects>>;
}

export interface SearchInputProps {
  stateName: string;
  stateStatus: StatusObjects;
  setStateStatus: Dispatch<SetStateAction<StatusObjects>>;
}

export interface ButtonGroupProps {
  onClick: () => {} | null;
  onClick2: () => {} | null;
}

export interface ButtonProps {
  onClick?: () => {} | null;
  style?: React.CSSProperties;
  variant?: 'default' | 'outline' | 'text';
  children?: React.ReactNode;
}
