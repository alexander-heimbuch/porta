import { AppState } from "../rootReducer";
import { StartTimer, START_TIMER, StopTimer, STOP_TIMER, UpdateTimer, UPDATE_TIMER } from "../actions";

export interface TimerState {
  value: number;
  running: boolean;
}

const initialState: TimerState = {
  value: 0,
  running: false
};

const reducer = (state: TimerState = initialState, action: UpdateTimer | StartTimer | StopTimer) => {
  switch (action.type) {
    case UPDATE_TIMER:
      return {
        ...state,
        value: action.payload,
      };
    case START_TIMER:
      return {
        ...state,
        value: 0,
        running: true,
      };
    case STOP_TIMER:
      return {
        ...state,
        running: false,
      };
    default:
      return state;
  }
};

const selectors = {
  value: (state: AppState) => state.timer.value,
  running: (state: AppState) => state.timer.running
}

export {
  reducer,
  selectors
};
