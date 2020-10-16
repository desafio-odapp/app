import moment from 'moment';

export const Types = {
  FETCH: 'paciente/FETCH',
  FETCH_SUCCESS: 'paciente/FETCH_SUCCESS',
  FETCH_FAILURE: 'paciente/FETCH_FAILURE',
  RESET: 'paciente/RESET'
};

export const Creators = {
  fetch: () => ({
    type: Types.FETCH,
    payload: undefined,
  }),
  fetchSuccess: ({
    error, responseMessage, pacientes
  }) => ({
    type: Types.FETCH_SUCCESS,
    payload: {
      error,
      responseMessage,
      pacientes,
    },
  }),
  fetchFailure: ({ error, responseMessage }) => ({
    type: Types.FETCH_FAILURE,
    payload: {
      error,
      responseMessage,
    },
  }),
};

const INITIAL_STATE = {
  loading: false,
  error: 0,
  responseMessage: '',
  pacientes: [],
};

export default function paciente(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH:
      return { ...state, loading: true };
    case Types.FETCH_SUCCESS:
      return { ...state, loading: false, ...action.payload };
    case Types.FETCH_FAILURE:
      return { ...state, loading: false, ...action.payload };
    case Types.RESET:
      return INITIAL_STATE;
      
    default:
      return state;
  }
}
