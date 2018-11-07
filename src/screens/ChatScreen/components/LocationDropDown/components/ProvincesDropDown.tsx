import React from 'react';
import { inject, observer } from 'mobx-react';
import AppStore from '../../../../../store/AppStore';
import { provinces } from './data/provinces';
import {
  SharedDropDown,
  getWhenSelectItem,
} from './shared';
import {
  ICity,
  ILocation,
} from '../../../../../store/AppStore.type';

interface IProvincesDropDownProps {
  selectedProvinceName?: string;
  setSelectedProvince?: (location: ILocation) => void;
  setSelectedCity?: (city: ICity) => void;
}

const ProvincesDropDown: React.SFC<
  IProvincesDropDownProps
> = ({
  selectedProvinceName,
  setSelectedProvince,
  setSelectedCity,
}) => {
  const whenSelectItem = getWhenSelectItem(
    selected => {
      setSelectedProvince!(selected);

      if (selected.name !== selectedProvinceName) {
        setSelectedCity!({
          name: '请选择 市',
          id: '',
          province: '',
        });
      }
    },
  );

  return (
    <SharedDropDown
      items={provinces}
      whenSelectItem={whenSelectItem}
      defaultText="请选择 省"
    />
  );
};

export default inject(
  ({ appStore }: { appStore: AppStore }) => ({
    selectedProvinceName:
      appStore.selectedProvince.name,
    setSelectedProvince: appStore.setSelectedProvince,
    setSelectedCity: appStore.setSelectedCity,
  }),
)(observer(ProvincesDropDown));
