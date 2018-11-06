import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Image, Text } from 'rebass';
import { FlexCard } from '../../../../components/buildingBlocks';
import arrowDown from '../../../../assets/arrowDown.svg';
import { IBaseStepType } from '../../utils';
import { provinces } from './data/provinces';
import { PointerEventsProperty } from 'csstype';
interface ICityDropDownProps extends IBaseStepType {}

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

const CityDropDown: React.SFC<ICityDropDownProps> = ({
  callback,
}) => {
  const [
    isProvincesOpen,
    toggleOpenProvinces,
  ] = useState(false);

  function openListOnClick() {
    toggleOpenProvinces(!isProvincesOpen);
  }

  const [selectedProvince, selectProvince] = useState<{
    name: string;
    id: string;
  }>({
    name: '',
    id: '',
  });

  function itemOnClick(
    e: React.MouseEvent<HTMLElement>,
  ) {
    const target = e.target as HTMLElement;
    const name = target.innerText;
    const id = target.attributes[0].value;

    selectProvince({
      name,
      id,
    });

    toggleOpenProvinces(false);
  }

  return (
    <FlexCard flexDirection="column">
      <FlexCard
        width="160px"
        alignItems="center"
        justifyContent="space-around"
        bg="primary"
        color="white1"
        px={1}
        py={2}
        boxShadow="0 4px 16px rgba(0, 0, 0.25, 0.4)"
        css={{ cursor: 'pointer' }}
        onClick={openListOnClick}
      >
        <Text>
          {selectedProvince.name || '请选择 省'}
        </Text>
        <Image src={arrowDown} alt="" />
      </FlexCard>

      <PoseGroup>
        {isProvincesOpen && (
          <ListBox key="provinces" width="160px">
            <FlexCard
              flexDirection="column"
              border="1px solid #E75B41"
              px={3}
              py={3}
              height="300px"
              bg="white1"
              css={{
                overflowY: 'auto',
              }}
            >
              {provinces.map(({ name, id }) => (
                <Text
                  key={id}
                  onClick={itemOnClick}
                  data-id={id}
                  mb={3}
                >
                  {name}
                </Text>
              ))}
            </FlexCard>
          </ListBox>
        )}
      </PoseGroup>
    </FlexCard>
  );
};

export default CityDropDown;
