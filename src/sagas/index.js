import { takeLatest} from 'redux-saga/effects';

import { types } from './../reducers/auth';

import signUpRequestSaga from './signUpRequestSaga';
import loginRequestSaga from './loginRequestSaga';

export default function* rootSaga() {
    yield takeLatest(types.SIGNUP_REQUEST, signUpRequestSaga);
    yield takeLatest(types.LOGIN_REQUEST, loginRequestSaga);
}