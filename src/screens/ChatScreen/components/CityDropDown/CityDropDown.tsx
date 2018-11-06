import React, { useState } from 'react';
import { FlexCard } from '../../../../components/buildingBlocks';
import { IBaseStepType } from '../../utils';
import { provinces } from './data/provinces';
interface ICityDropDownProps extends IBaseStepType {}

const CityDropDown: React.SFC<ICityDropDownProps> = ({
  callback,
}) => {
  const [selectedCity, selectCity] = useState('');

  return <FlexCard>我是下拉框</FlexCard>;
};

export default CityDropDown;
