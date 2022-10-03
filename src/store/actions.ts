export const MARAX_TEMPERATURE_HX = "/marax/hx";
export const MARAX_TEMPERATURE_STEAM = "/marax/steam";
export const MARAX_SHOT = "/marax/shot";
export const MARAX_PUMP = "/marax/pump";
export const MARAX_POWER = "/marax/power";
export const UPDATE_TIMER = "/timer/update";
export const START_TIMER = "/timer/start";
export const STOP_TIMER = "/timer/stop";
export const TEMPERATURE_UPDATE_CHART = "/temperature/update-chart";

export interface UpdateTemperatureHx {
  type: typeof MARAX_TEMPERATURE_HX;
  payload: number;
}

export interface UpdateTemperatureSteam {
  type: typeof MARAX_TEMPERATURE_STEAM;
  payload: number;
}

export interface UpdatePump {
  type: typeof MARAX_PUMP;
  payload: "on" | "off";
}

export interface UpdateShot {
  type: typeof MARAX_SHOT;
  payload: number;
}

export interface UpdatePower {
  type: typeof MARAX_POWER;
  payload: "on" | "off";
}

export interface UpdateTimer {
  type: typeof UPDATE_TIMER;
  payload: number;
}

export interface StartTimer {
  type: typeof START_TIMER;
}

export interface StopTimer {
  type: typeof STOP_TIMER;
}

export interface UpdateTemperatureChart {
  type: typeof TEMPERATURE_UPDATE_CHART;
  payload: {
    hx: number;
    steam: number;
    time: number;
  }
}
