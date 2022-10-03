import { AppState } from "../rootReducer";
import { MARAX_SHOT, UpdateShot } from "../actions";

export type ShotState = { time: number; duration: number; }[];

const initialState: ShotState = [];

const reducer = (state: ShotState = initialState, action: UpdateShot) => {
  switch (action.type) {
    case MARAX_SHOT:
      return [{ duration: action.payload, time: Date.now() }, ...state]
    default:
      return state;
  }
};

const selectors = {
  shots: (state: AppState) => state.shots
}

export {
  reducer,
  selectors
};
