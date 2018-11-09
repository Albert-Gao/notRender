import React, { memo, useContext } from 'react';
import { provinces } from './data/provinces';
import {
  SharedDropDown,
  getWhenSelectItem,
} from './shared';
import { AppStoreContext } from '../../../../../store/store';

function ProvincesDropDown() {
  const {
    setSelectedProvince,
    setSelectedCity,
    selectedProvince,
  } = useContext(AppStoreContext);

  const selectedProvinceName = selectedProvince.name;

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
}

export default memo(ProvincesDropDown);
