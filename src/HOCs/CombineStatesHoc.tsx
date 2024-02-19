import React, { useState } from 'react';
import { StateComponent } from '../components/StateComponent';
import { StatusObjects } from './types';

export const CombineStatesHoc: React.FC = () => {
  const sortedStateNames = ['continents', 'countries', 'languages'];
  const [stateStatus, setStateStatus] = useState<StatusObjects | undefined>();

  return (
    <div className="flex">
      {sortedStateNames.map((stateName) => (
        <div className="w-2/6">
          <StateComponent
            stateStatus={stateStatus}
            setStateStatus={setStateStatus}
            key={stateName}
            stateName={stateName}
          />
        </div>
      ))}
    </div>
  );
};
