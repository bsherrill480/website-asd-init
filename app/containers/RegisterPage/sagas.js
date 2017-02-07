// import { take, call, put, select } from 'redux-saga/effects';
import userRegisterSagas from 'containers/UserRegister/sagas';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  defaultSaga,
  ...userRegisterSagas,
];
