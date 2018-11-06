import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Image, Text } from 'rebass';
import { FlexCard } from './buildingBlocks';
import arrowDown from '../assets/arrowDown.svg';

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

const FadeChild = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

interface IDropDownProps {
  defaultSelected: any;
  items: any[];
  whenSelectItem: (
    event: React.MouseEvent<HTMLElement>,
    selectItemFromList: Function,
  ) => void;
  displaySelected: (selected: any) => string;
  displayItems: (
    itemOnClick: Function,
  ) => (item: any) => React.ReactNode;
}

const DropDown: React.SFC<IDropDownProps> = ({
  defaultSelected,
  items,
  whenSelectItem,
  displaySelected,
  displayItems,
}) => {
  const [isOpen, toggleOpen] = useState(false);

  function openListOnClick() {
    toggleOpen(!isOpen);
  }

  const [selectedItem, selectItemFromList] = useState(
    defaultSelected,
  );

  function itemOnClick(
    e: React.MouseEvent<HTMLElement>,
  ) {
    whenSelectItem(e, selectItemFromList);
    toggleOpen(false);
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
        <Text>{displaySelected(selectedItem)}</Text>
        <Image src={arrowDown} alt="" />
      </FlexCard>

      <PoseGroup>
        {isOpen && (
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
              {items.map(displayItems(itemOnClick))}
            </FlexCard>
          </ListBox>
        )}
      </PoseGroup>
    </FlexCard>
  );
};

export default DropDown;
