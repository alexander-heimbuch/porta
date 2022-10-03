import React from "react";
import { useSelector } from "react-redux";
import * as temperatures from '../store/reducers/temperatures';

function TemperatureHx() {
  const hx = useSelector(temperatures.selectors.hx)

  return (
    <div>
      <div className="rounded-full border-4 border-orange-600 flex items-center justify-center flex-col w-28 h-28 portrait:w-52 portrait:h-52">
        <div className="text-white portrait:text-xl portrait:-mt-5">HX</div>
        <div className="text-orange-600 font-mono text-xl portrait:text-5xl">
          {hx}°C
        </div>
      </div>
    </div>
  );
}

export default TemperatureHx;
