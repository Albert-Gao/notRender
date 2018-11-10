import React, { useContext } from 'react';
import { AppStoreContext } from '../../../store/store';
import { IBaseStepType } from '../utils';
import Switch from '../../../components/Switch/Switch';
import { observer } from '../../../miscellaneous/mobx-react';

const DegreeInChina: React.FC<IBaseStepType> = ({
  callback,
}) => {
  const {
    isDegreeGetInChina,
    setIsDegreeGetInChina,
  } = useContext(AppStoreContext);

  const onClick = (value: boolean) => {
    setIsDegreeGetInChina(value);
    callback();
  };

  return (
    <Switch
      isChecked={isDegreeGetInChina}
      setChecked={onClick}
    />
  );
};

export default observer(DegreeInChina);
