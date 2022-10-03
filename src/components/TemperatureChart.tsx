import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import * as temperature from "../store/reducers/temperatures";

function TemperatureChart() {
  const data = useSelector(temperature.selectors.chart);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <Line type="monotone" dataKey="hx" strokeWidth={2} stroke="currentColor" className="text-orange-600" dot={false}/>
          <Line type="monotone" dataKey="steam"  stroke="currentColor" className="text-blue-600" strokeWidth={2} dot={false}/>
          <ReferenceLine y={92.5} stroke="rgba(250, 64, 66, 0.8)" strokeDasharray="5 5" />
          <XAxis
          dataKey = 'time'
          name = 'Time'
          tickFormatter = {(timeStamp) => {
            const date = new Date(timeStamp)
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
          }}
          type = 'number'
        />
        <YAxis ticks={[20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140]} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default TemperatureChart;
