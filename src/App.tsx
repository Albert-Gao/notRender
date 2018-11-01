import React, { useState } from "react";
import Store from "./store";
import { observer } from "./lib/mobx-react";

const store = new Store();

const App = observer(() => (
  <div>
    {store.count}
    <button onClick={() => store.addCount()}>click</button>
  </div>
));

export default App;
