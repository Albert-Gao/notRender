import React from 'react';
// @ts-ignore
import Typing from 'react-typing-animation';
import { styled } from '../../../../../styles/styledLib';
import { Card, Box } from 'rebass';
import { FlexCard } from '../../../../../components/buildingBlocks';

const FlexCardWrapper = styled(FlexCard)`
  &:after {
    content: '';
    position: absolute;
    left: 100px;
    border-right: 8px solid
      ${p => p.theme.colors.white1};
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    filter: drop-shadow(${p => p.theme.shadows[1]});
  }
`;

const Words: React.SFC<{ text: string }> = ({
  text,
}) => {
  return (
    <FlexCardWrapper
      ml={3}
      boxShadow={1}
      height={41}
      alignItems="center"
      px={4}
      py={1}
      borderRadius={4}
      bg="white1"
    >
      <Typing speed={100}>
        <span>{text}</span>
      </Typing>
    </FlexCardWrapper>
  );
};

export default Words;
