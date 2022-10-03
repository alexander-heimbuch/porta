import { combineReducers } from "redux";

import * as timer from "./reducers/timer";
import * as shots from "./reducers/shots";
import * as temperatures from "./reducers/temperatures";

const rootReducer = combineReducers({
  timer: timer.reducer,
  shots: shots.reducer,
  temperatures: temperatures.reducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
