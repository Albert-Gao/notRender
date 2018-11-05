// @ts-ignore
import Typing from 'react-typing-animation';
import React, { useState } from 'react';
import posed from 'react-pose';
import { FlexCard } from '../../../../../components/buildingBlocks';
import writingAnimation from '../../../../../assets/writing.svg';
import { IBaseStepType } from '../../../utils';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const ScaleBox = posed.div({
  initialPose: 'exit',
  enter: {
    scaleX: 1,
    originX: 0,
    applyAtEnd: { width: 'auto' },
    transition: { duration: 500 },
  },
  exit: { scaleX: 0, originX: 0 },
});

const Words: React.SFC<IWordsProps> = ({
  isEnterAnimationFinished,
  text,
  callback,
}) => {
  const [writingStatus, setIsWritingEnd] = useState(0);

  if (
    isEnterAnimationFinished &&
    writingStatus === 0
  ) {
    setIsWritingEnd(1);
    setTimeout(() => {
      setIsWritingEnd(2);
    }, 1100);
  }

  return (
    <ScaleBox
      pose={
        isEnterAnimationFinished ? 'enter' : 'exit'
      }
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
        isEnterAnimationFinished={
          isEnterAnimationFinished
        }
        justifyContent="center"
        css={{
          minHeight: '41px',
        }}
      >
        {writingStatus === 1 && (
          <img src={writingAnimation} height="41px" />
        )}
        {writingStatus === 2 && (
          <Typing
            speed={7}
            onFinishedTyping={callback}
          >
            <span>{text}</span>
          </Typing>
        )}
      </FlexCard>
    </ScaleBox>
  );
};

export default Words;
