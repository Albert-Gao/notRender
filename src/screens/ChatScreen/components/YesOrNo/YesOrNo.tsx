import React from 'react';
import { Flex, Button as RebassButton } from 'rebass';
import { styled } from '../../../../styles/styledLib';
import { inject, observer } from 'mobx-react';
import { IBaseStepType } from '../../utils';
import AppStore from '../../../../store/AppStore';

const Button = styled(RebassButton)`
  width: 140px;
  height: 55px;
  transition: all 0.3s;
  margin-right: 10px;
  cursor: pointer;
  transition-property: box-shadow, transform;
  transition-duration: 0.3s;

  &:hover {
    box-shadow: 0 10px 19px -7px rgba(0, 0.9, 0.9, 1.3);
    transform: scale(1.1);
  }

  &:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

interface IYesOrNoProp extends IBaseStepType {
  setIsDegreeGetInChina: (value: boolean) => void;
}

const YesOrNo: React.SFC<IYesOrNoProp> = ({
  setIsDegreeGetInChina,
  callback,
}) => {
  const setValue = (value: boolean) => () => {
    setIsDegreeGetInChina(value);
    callback();
  };

  return (
    <Flex>
      <Button bg="primary" onClick={setValue(true)}>
        Yes
      </Button>
      <Button bg="primary" onClick={setValue(false)}>
        No
      </Button>
    </Flex>
  );
};

export default inject(
  ({ appStore }: { appStore: AppStore }) => ({
    setIsDegreeGetInChina:
      appStore.setIsDegreeGetInChina,
  }),
)(observer(YesOrNo));
