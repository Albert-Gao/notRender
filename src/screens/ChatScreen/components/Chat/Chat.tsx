import React from 'react';
import { observer } from 'mobx-react-lite';
import Words, {
  IWordsProps,
} from './components/Words/Words';

const Chat: React.FC<IWordsProps> = ({
  text,
  callback,
}) => (
  <div style={{ alignItems: 'center' }}>
    <Words text={text} callback={callback} />
  </div>
);

export default observer(Chat);
