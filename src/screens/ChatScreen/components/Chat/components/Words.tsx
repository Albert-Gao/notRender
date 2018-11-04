import React from 'react';
// @ts-ignore
import Typing from 'react-typing-animation';
import { styled } from '../../../../../styles/styledLib';
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

const Words: React.SFC<{
  text: string;
  callback: Function;
}> = ({ text, callback }) => {
  return (
    <FlexCardWrapper
      ml={3}
      boxShadow={1}
      height="auto"
      alignItems="center"
      px={4}
      py={1}
      borderRadius={4}
      bg="white1"
      css={{
        minHeight: '41px',
      }}
    >
      <Typing
        startDelay={300}
        speed={100}
        onFinishedTyping={callback}
      >
        <span>{text}</span>
      </Typing>
    </FlexCardWrapper>
  );
};

export default Words;
