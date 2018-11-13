import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { AppStoreContext } from '../../../store/store';
import { IBaseStepType } from '../utils';
import Switch from '../../../components/Switch/Switch';

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
