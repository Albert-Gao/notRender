// @ts-ignore
import Typing from 'react-typing-animation';
import React, { useState } from 'react';
import { PoseGroup } from 'react-pose';
import { FlexCard } from '../../../../../../components/buildingBlocks';
import writingAnimation from '../../../../../../assets/writing.svg';
import { IBaseStepType } from '../../../../utils';
import {
  ScaleBox,
  FadeChild,
  FadeChildWithDelay,
} from './Words.animation';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const Words: React.SFC<IWordsProps> = ({
  text,
  callback,
}) => {
  const [writingStatus, setIsWritingEnd] = useState(0);

  if (writingStatus === 0) {
    setIsWritingEnd(1);
    setTimeout(() => {
      setIsWritingEnd(2);
    }, 1800);
  }

  return (
    <ScaleBox
      pose={writingStatus === 0 ? 'enter' : 'exit'}
    >
      <FlexCard
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
        <PoseGroup>
          {writingStatus === 1 && (
            <FadeChildWithDelay key="img">
              <img
                src={writingAnimation}
                height="38px"
              />
            </FadeChildWithDelay>
          )}
          {writingStatus === 2 && (
            <FadeChild key="typing">
              <Typing
                speed={7}
                onFinishedTyping={callback}
              >
                <span>{text}</span>
              </Typing>
            </FadeChild>
          )}
        </PoseGroup>
      </FlexCard>
    </ScaleBox>
  );
};

export default Words;
