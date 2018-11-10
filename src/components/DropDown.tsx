import React, { useState } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Image, Text } from 'rebass';
import { FlexCard } from './buildingBlocks';
import arrowDown from '../assets/arrowDown.svg';

const ListBox = posed.div({
  enter: { opacity: 1, scaleY: 1, originX: 0 },
  exit: { opacity: 0, scaleY: 0, originX: 0 },
});

interface IDropDownProps {
  css?: React.CSSProperties;
  hasBoxShadow?: boolean;
  initializeSelected: any;
  items: any[];
  setText?: string;
  whenSelectItem: (
    event: React.MouseEvent<HTMLElement>,
    selectItemFromList: Function,
  ) => void;
  displaySelected?: (selected: any) => string;
  displayItems: (
    itemOnClick: Function,
  ) => (item: any) => React.ReactNode;
}

const getValueToDisplay = ({
  displaySelected,
  selectedItem,
  setText,
}: {
  displaySelected?: Function;
  selectedItem: any;
  setText?: string;
}) => {
  if (setText) return setText;

  if (typeof displaySelected === 'function') {
    return displaySelected(selectedItem);
  }

  return selectedItem;
};

const DropDown: React.FC<IDropDownProps> = ({
  hasBoxShadow,
  initializeSelected,
  items,
  setText,
  whenSelectItem,
  displaySelected,
  displayItems,
  css,
}) => {
  const [isOpen, toggleOpen] = useState(false);
  const [selectedItem, selectItemFromList] = useState(
    initializeSelected,
  );

  function openListOnClick() {
    toggleOpen(!isOpen);
  }

  function itemOnClick(
    e: React.MouseEvent<HTMLElement>,
  ) {
    whenSelectItem(e, selectItemFromList);
    toggleOpen(false);
  }

  const boxShadowStyle = hasBoxShadow
    ? '0 4px 16px rgba(0, 0, 0.25, 0.4)'
    : '';

  let toDisplay = getValueToDisplay({
    displaySelected,
    selectedItem,
    setText,
  });

  return (
    <FlexCard
      flexDirection="column"
      bg="#c3c2c2"
      css={{
        position: 'relative',
      }}
    >
      <FlexCard
        width="160px"
        alignItems="center"
        justifyContent="space-around"
        bg="primary"
        color="white1"
        px={1}
        py={2}
        boxShadow={boxShadowStyle}
        css={{
          cursor: 'pointer',
          ...css,
        }}
        onClick={openListOnClick}
      >
        <Text>{toDisplay}</Text>
        <Image
          css={{
            transform: isOpen
              ? 'rotate(180deg)'
              : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          src={arrowDown}
          alt=""
        />
      </FlexCard>
      <PoseGroup
        style={{
          position: 'absolute',
          top: 44,
          width: '100%',
        }}
      >
        {isOpen && (
          <ListBox key="provinces" width="160px">
            <FlexCard
              style={{ position: 'relative' }}
              flexDirection="column"
              border="1px solid #E75B41"
              px={3}
              py={3}
              height="300px"
              bg="white1"
              css={{
                overflowY: 'auto',
                zIndex: '99',
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
