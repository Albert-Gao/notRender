import React from 'react';
import { Box, Text } from 'rebass';
import { IBaseStepType } from '../../utils';
import { provinces } from './data/provinces';
import DropDown from '../../../../components/DropDown';

interface ICityDropDownProps extends IBaseStepType {}

interface IProvince {
  name: string;
  id: string;
}

const defaultSelected = {
  name: '',
  id: '',
};

const whenSelectItem = (
  e: React.MouseEvent<HTMLElement>,
  selectItemFromList: Function,
) => {
  const target = e.target as HTMLElement;
  const name = target.innerText;
  const id = target.attributes[0].value;

  selectItemFromList({
    name,
    id,
  });
};

const displayItem = (itemOnClick: Function) => ({
  name,
  id,
}: IProvince) => (
  <Text
    key={id}
    onClick={itemOnClick}
    data-id={id}
    mb={3}
  >
    {name}
  </Text>
);

const displaySelected = (selected: IProvince) =>
  selected.name || '请选择 省';

const CityDropDown: React.SFC<ICityDropDownProps> = ({
  callback,
}) => {
  return (
    <Box>
      <DropDown
        defaultSelected={defaultSelected}
        items={provinces}
        whenSelectItem={whenSelectItem}
        displaySelected={displaySelected}
        displayItems={displayItem}
      />
    </Box>
  );
};

export default CityDropDown;
