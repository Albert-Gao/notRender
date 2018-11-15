// @ts-ignore
import Typing from 'react-typing-animation';
import React from 'react';
import { PoseGroup } from 'react-pose';
import writingAnimation from '../../../../../../assets/writing.svg';
import { IBaseStepType } from '../../../../utils';
import {
  ScaleBox,
  FadeChild,
  FadeChildWithDelay,
} from './Words.animation';
import {
  WORDS_LOADING_STATUS,
  useLoadingStatus,
} from './loadingStatus';

export interface IWordsProps extends IBaseStepType {
  text: string;
}

const Words: React.FC<IWordsProps> = ({
  text,
  callback,
}) => {
  const loadingStatus = useLoadingStatus();

  return (
    <ScaleBox
      pose={
        loadingStatus === WORDS_LOADING_STATUS.NORMAL
          ? 'enter'
          : 'exit'
      }
    >
      <div
        style={{
          height: 'auto',
          alignItems: 'center',
        }}
      >
        <PoseGroup>
          {loadingStatus ===
            WORDS_LOADING_STATUS.WRITING && (
            <FadeChildWithDelay key="img">
              <img
                src={writingAnimation}
                height="38px"
              />
            </FadeChildWithDelay>
          )}
          {loadingStatus ===
            WORDS_LOADING_STATUS.TYPING && (
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
      </div>
    </ScaleBox>
  );
};

export default Words;
