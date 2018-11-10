import React from 'react';
import { IBaseStepType } from '../../utils';
import ProvincesDropDown from './components/ProvincesDropDown';
import CitiesDropDown from './components/CitiesDropDown';
import { FlexCard } from '../../../../components/buildingBlocks';

const LocationDropDown: React.FC<IBaseStepType> = ({
  callback,
}) => {
  return (
    <FlexCard boxShadow={2}>
      <ProvincesDropDown />
      <CitiesDropDown callback={callback} />
    </FlexCard>
  );
};

export default LocationDropDown;
