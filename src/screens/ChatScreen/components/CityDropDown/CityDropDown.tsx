import React from 'react';
import { FlexCard } from '../../../../components/buildingBlocks';
import { IBaseStepType } from '../../utils';

interface ICityDropDownProps extends IBaseStepType {}

const CityDropDown: React.SFC<ICityDropDownProps> = ({
  callback,
}) => {
  return <FlexCard>我是下拉框</FlexCard>;
};

export default CityDropDown;
