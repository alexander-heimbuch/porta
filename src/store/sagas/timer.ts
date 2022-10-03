import { call, delay, fork, put, select, takeEvery } from "redux-saga/effects";
import { MARAX_PUMP, UpdatePump, START_TIMER, STOP_TIMER, UPDATE_TIMER } from "../actions";
import { selectors } from "../reducers/timer";

export function* timerSaga() {
  yield takeEvery(MARAX_PUMP as any, handleTimer)
}

function* handleTimer({ payload }: UpdatePump) {
  switch (payload) {
    case 'on':
      yield put({ type: START_TIMER });
      yield fork(runTimer);
      break;
    case 'off':
      const value: number = yield select(selectors.value);
      if (value < 15) {
        yield put({ type: UPDATE_TIMER, payload: 0 });
      }
      yield put({ type: STOP_TIMER });
    break;
  }
}


function* runTimer(): any {
  const value: number = yield select(selectors.value);
  const running: boolean = yield select(selectors.running);

  if (running) {
    yield put({ type: UPDATE_TIMER, payload: value + 1 });
    yield delay(1000);
    yield call(runTimer);
  }
}
