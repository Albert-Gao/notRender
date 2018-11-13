import React, { useContext } from 'react';
import { Flex } from 'rebass';
import { observer } from 'mobx-react-lite';
import { IBaseStepType } from '../../utils';
import { AppStoreContext } from '../../../../store/store';
import BaseButton from './YesOrNo.base';

const YesOrNo: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const { setIsDegreeGetInChina } = useContext(
    AppStoreContext,
  );

  const setValue = (value: boolean) => () => {
    setIsDegreeGetInChina(value);
    callback();
  };

  return (
    <Flex>
      <BaseButton
        bg="primary"
        onClick={setValue(true)}
      >
        Yes
      </BaseButton>
      <BaseButton
        bg="primary"
        onClick={setValue(false)}
      >
        No
      </BaseButton>
    </Flex>
  );
};

export default observer(YesOrNo);
