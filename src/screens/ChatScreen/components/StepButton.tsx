import React from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../utils';

const StepButton: React.FC<IBaseStepType> = ({
  callback,
}) => {
  return (
    <button
      onClick={
        callback as (e: React.MouseEvent) => void
      }
    >
      Click me to the next step
    </button>
  );
};

export default observer(StepButton);
