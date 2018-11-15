import React from 'react';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../utils';

const LocationDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  return (
    <button
      onClick={
        callback as (e: React.MouseEvent) => void
      }
    >
      Click me to step 3
    </button>
  );
};

export default observer(LocationDropDown);
