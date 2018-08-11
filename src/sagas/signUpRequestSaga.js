import { call, put } from 'redux-saga/effects';
import { auth } from './../api/firebase';
import { actions } from './../reducers/auth';

export default function* signUpRequestSaga(action) {
    try{
        const res = yield call(auth.createUserWithEmailAndPassword, action.email, action.password);
        if (res) {
            auth.sendEmailVerification();
            yield put(actions.signupSuccess({
                email: res.user.email,
                token: auth.getToken(),
                uid: res.user.uid
            }));
        }
    } catch(error) {
        console.error(error);
        yield put(actions.signupFail(error));
    }
}