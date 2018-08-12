import { takeLatest} from 'redux-saga/effects';

import { types } from './../reducers/auth';

import signUpRequestSaga from './signUpRequestSaga';
import loginRequestSaga from './loginRequestSaga';
import autoLoginRequestSaga from './autoLoginRequestSaga';
import signoutSaga from './signoutSaga';

export default function* rootSaga() {
    yield takeLatest(types.SIGNUP_REQUEST, signUpRequestSaga);
    yield takeLatest(types.LOGIN_REQUEST, loginRequestSaga);
    yield takeLatest(types.AUTO_LOGIN_REQUEST, autoLoginRequestSaga);
    yield takeLatest(types.SIGN_OUT, signoutSaga);
}