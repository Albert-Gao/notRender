import React, { useContext } from 'react';
import { Flex, Button as RebassButton } from 'rebass';
import { styled } from '../../../../styles/styledLib';
import { IBaseStepType } from '../../utils';
import { AppStoreContext } from '../../../../store/store';
import { observer } from '../../../../miscellaneous/mobx-react';

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

const YesOrNo: React.SFC<IBaseStepType> = ({
  callback,
}) => {
  const appStore = useContext(AppStoreContext);

  const setIsDegreeGetInChina =
    appStore.setIsDegreeGetInChina;

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

export default observer(YesOrNo);
