import * as mqtt from "precompiled-mqtt";
import { MqttClient } from "precompiled-mqtt";
import { eventChannel } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import { MARAX_TEMPERATURE_HX, MARAX_TEMPERATURE_STEAM, MARAX_SHOT, MARAX_PUMP, MARAX_POWER } from "../actions";

const safeParse = (value: any) => {
  try {
    return JSON.parse(value)
  } catch (err) {
    return value;
  }
}

// eslint-disable-next-line require-yield
function* message(client: MqttClient) {
  return eventChannel((emit) => {
    const update = (topic: string, message: Buffer) => emit({ topic, message: safeParse(message.toString()) });

    client.on("message", update);
    return () => {
      // This is a handler to unsubscribe.
    };
  });
}

function connect(): Promise<MqttClient> {
  const client = mqtt.connect("wss://iot.fritz.box", { port: 9001 });

  return new Promise(resolve => {
    client.on("connect", function () {
      [MARAX_TEMPERATURE_HX, MARAX_TEMPERATURE_STEAM, MARAX_SHOT, MARAX_PUMP, MARAX_POWER].forEach(subject => {
        client.subscribe(subject);
      });

      resolve(client);
    });
  });
}

export function* mqttSaga() {
  const client: MqttClient = yield connect();

  // @ts-ignore
  const subscription = yield call(message, client);
  yield takeEvery(subscription, dispatchAction);
}

function* dispatchAction({ topic, message }: { topic: string, message: string }) {
  yield put({ type: topic, payload: message });
}
