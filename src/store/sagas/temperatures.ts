import { call, delay, fork, put, select } from "redux-saga/effects";
import { TEMPERATURE_UPDATE_CHART } from "../actions";
import { selectors } from "../reducers/temperatures";

export function* temperaturesSaga() {
  yield fork(collectData);
}

function* collectData(): any {
  const hx: number = yield select(selectors.hx);
  const steam: number = yield select(selectors.steam);

  if (hx > 0 && steam > 0) {
    const payload = { time: Date.now(), hx, steam };
    yield put({ type: TEMPERATURE_UPDATE_CHART, payload });
  }

  yield delay(5000);
  yield call(collectData);
}
