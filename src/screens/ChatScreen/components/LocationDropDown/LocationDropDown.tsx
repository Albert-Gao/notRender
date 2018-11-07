import React from 'react';
import { IBaseStepType } from '../../utils';
import ProvincesDropDown from './components/ProvincesDropDown';
import CitiesDropDown from './components/CitiesDropDown';
import { FlexCard } from '../../../../components/buildingBlocks';

interface ILocationDropDownProps
  extends IBaseStepType {}

const LocationDropDown: React.SFC<
  ILocationDropDownProps
> = ({ callback }) => {
  return (
    <FlexCard boxShadow={2}>
      <ProvincesDropDown />
      <CitiesDropDown callback={callback} />
    </FlexCard>
  );
};

export default LocationDropDown;
