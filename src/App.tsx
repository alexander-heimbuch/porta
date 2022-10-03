import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Timer from "./components/Timer";
import TemperatureChart from "./components/TemperatureChart";
import TemperatureHx from "./components/TemperatureHx";
import TemperatureSteam from "./components/TemperatureSteam";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-full flex">
        <div className="w-10/12 pt-3 pr-6 block portrait:hidden">
          <TemperatureChart />
        </div>
        <div className="w-2/12 portrait:w-full py-3 portrait:py-10 flex justify-between items-center flex-col">
          <Timer />
          <TemperatureHx />
          <TemperatureSteam />
        </div>
      </div>
    </Provider>
  );
}

export default App;
