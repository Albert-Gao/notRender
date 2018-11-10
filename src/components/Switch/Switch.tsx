import React from 'react';
import styles from './Switch.module.css';
import { FlexCard } from '../buildingBlocks';
import { TrueText, FalseText } from './Switch.style';

interface ISwitchProp {
  textForTrue?: string;
  textForFalse?: string;
  isChecked: boolean;
  setChecked: (isChecked: boolean) => void;
}

const Switch: React.FC<ISwitchProp> = ({
  textForTrue,
  textForFalse,
  isChecked,
  setChecked,
}) => {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setChecked(!isChecked);
  };

  return (
    <FlexCard
      css={{ cursor: 'pointer' }}
      onClick={onClick}
      alignItems="center"
    >
      <FalseText isChecked={isChecked}>
        {textForFalse || '不是'}
      </FalseText>
      <input
        className={styles.switchInput}
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={() => setChecked(isChecked)}
      />
      <div className={styles.switchDiv}>
        <label
          className={styles.switchLabel}
          htmlFor="toggle"
        />
      </div>
      <TrueText isChecked={isChecked}>
        {textForTrue || '是'}
      </TrueText>
    </FlexCard>
  );
};

export default Switch;
