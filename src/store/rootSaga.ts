import { all, fork } from "redux-saga/effects";
import { mqttSaga } from "./sagas/mqtt";
import { timerSaga } from "./sagas/timer";
import { temperaturesSaga } from "./sagas/temperatures";

export function* rootSaga() {
  yield all([fork(mqttSaga), fork(timerSaga), fork(temperaturesSaga)]);
}
