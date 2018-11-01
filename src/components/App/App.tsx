import React, { useContext } from 'react';
import { StoreContext } from '../../store/store';
import { observer } from '../../utils/utils';

function App() {
  const { appStore } = useContext(StoreContext);

  return (
    <div>
      {appStore.count}
      <button onClick={() => appStore.addCount()}>click</button>
    </div>
  );
}

export default observer(App);
