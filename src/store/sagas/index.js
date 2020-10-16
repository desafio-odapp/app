import { all } from 'redux-saga/effects';

import pacienteSaga from './paciente';

export default function* rootSaga() {
  yield all([pacienteSaga()]);
}
