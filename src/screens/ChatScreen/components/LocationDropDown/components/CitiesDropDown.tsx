import React from 'react';
import { inject, observer } from 'mobx-react';
import AppStore from '../../../../../store/AppStore';
import {
  getWhenSelectItem,
  SharedDropDown,
} from './shared';
import { cities } from './data/cities';
import {
  ICity,
  ILocation,
} from '../../../../../store/AppStore.type';

interface ICitiesDropDownProps {
  setSelectedCity?: (city: ILocation) => void;
  selectedProvince?: ILocation;
  selectedCity?: ICity;
  callback?: Function;
}

const getItems = (selectedProvince: ILocation) =>
  selectedProvince
    ? cities[selectedProvince.id]
    : [{ name: '', id: '' }];

const CitiesDropDown: React.SFC<
  ICitiesDropDownProps
> = ({
  setSelectedCity,
  selectedProvince,
  selectedCity,
  callback,
}) => {
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

export default inject(
  ({ appStore }: { appStore: AppStore }) => ({
    selectedProvince: appStore.selectedProvince,
    selectedCity: appStore.selectedCity,
    setSelectedCity: appStore.setSelectedCity,
  }),
)(observer(CitiesDropDown));
