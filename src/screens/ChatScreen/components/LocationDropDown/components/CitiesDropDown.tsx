import React, { memo, useContext } from 'react';
import {
  getWhenSelectItem,
  SharedDropDown,
} from './shared';
import { cities } from './data/cities';
import { ILocation } from '../../../../../store/AppStore.type';
import { AppStoreContext } from '../../../../../store/store';
import { observer } from '../../../../../miscellaneous/mobx-react';
import { IBaseStepType } from '../../../utils';

const getItems = (selectedProvince: ILocation) =>
  selectedProvince
    ? cities[selectedProvince.id]
    : [{ name: '', id: '' }];

const CitiesDropDown: React.SFC<IBaseStepType> = ({
  callback,
}) => {
  const {
    selectedProvince,
    selectedCity,
    setSelectedCity,
  } = useContext(AppStoreContext);

  const whenSelectItem = getWhenSelectItem(
    selected => {
      setSelectedCity!(selected);
      callback!();
    },
  );

  let items = getItems(selectedProvince!);

  return (
    <SharedDropDown
      setText={selectedCity!.name}
      items={items}
      whenSelectItem={whenSelectItem}
      defaultText="请选择 市"
    />
  );
};

export default observer(CitiesDropDown);
