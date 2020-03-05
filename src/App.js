import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, username } from './store/actions/allActions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispath = useDispatch();
  
  return (
    <div>  
      <h1>Total counter is {counter}</h1>
      {/* <p>{username()}</p> */}
      <button onClick={() => dispath(increment())}>+</button>
      <button onClick={() => dispath(decrement())}>-</button>

      <p>{() => dispath(username())}</p>

    </div>
  );
}

export default App;
