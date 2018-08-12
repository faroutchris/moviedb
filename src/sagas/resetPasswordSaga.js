import { call, put } from 'redux-saga/effects';
import { auth } from './../api/firebase';
import { actions } from './../reducers/auth';

export default function* resetPasswordSaga(action) {
    try{
        yield call(auth.sendPasswordResetEmail, action.email);
        // @TODO -> create toast message
        yield put(actions.resetPasswordSuccess(true));
    } catch(error) {
        console.log(error);
        yield put(actions.resetPasswordFail(error));
    }
}