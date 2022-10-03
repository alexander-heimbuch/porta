import { AppState } from "../rootReducer";
import { MARAX_TEMPERATURE_HX, UpdateTemperatureHx, MARAX_TEMPERATURE_STEAM, UpdateTemperatureSteam, UpdateTemperatureChart, TEMPERATURE_UPDATE_CHART} from "../actions";

export interface TemperatureState {
  hx: number;
  steam: number;
  chart: { hx: number; steam: number; time: number }[];
}

const initialState: TemperatureState = {
  hx: 0,
  steam: 0,
  chart: []
};

const reducer = (state: TemperatureState = initialState, action: UpdateTemperatureHx | UpdateTemperatureSteam | UpdateTemperatureChart) => {
  switch (action.type) {
    case MARAX_TEMPERATURE_HX:
      return {
        ...state,
        hx: action.payload
      }
    case MARAX_TEMPERATURE_STEAM:
      return {
        ...state,
        steam: action.payload
      }
    case TEMPERATURE_UPDATE_CHART:
      return {
        ...state,
        chart: [action.payload, ...state.chart.slice(0, 400)]
      }
    default:
      return state;
  }
};

const selectors = {
  hx: (state: AppState) => state.temperatures.hx,
  steam: (state: AppState) => state.temperatures.steam,
  chart: (state: AppState) => state.temperatures.chart
}

export {
  reducer,
  selectors
};
