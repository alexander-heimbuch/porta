import React from "react";
import { useSelector } from "react-redux";
import * as timer from '../store/reducers/timer';

function Timer() {
  const value = useSelector(timer.selectors.value)

  return (
    <div className="rounded-full border-4 border-white text-5xl portrait:text-7xl flex items-center justify-center w-28 h-28  portrait:w-52 portrait:h-52">
      <div className="text-white font-mono">
        {value}
      </div>
    </div>
  );
}

export default Timer;
