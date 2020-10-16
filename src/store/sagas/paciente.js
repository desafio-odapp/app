import { takeLatest, call, put } from 'redux-saga/effects';

import { Types as PacienteTypes, Creators as PacienteActions } from '../ducks/paciente';
import { PacienteService } from '../../services';


function* fetch() {
  try {
    const pacientes = yield call([PacienteService, 'getAll']);

    yield put(PacienteActions.fetchSuccess({
      error: '',
      responseMessage: '',
      pacientes,
    }));
  } catch (err) {
    yield put(PacienteActions.fetchFailure({
      error: 1,
      responseMessage: 'Não foi possível carregar os dados',
    }));
  }
}

export default function* rootPaciente() {
  yield takeLatest(PacienteTypes.FETCH, fetch);
}
