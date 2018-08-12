import { call, put } from 'redux-saga/effects';
import { auth } from './../api/firebase';
import { actions } from './../reducers/auth';

export default function* autoLoginRequestSaga(action) {
    try {
        const user = yield call(auth.getUserSession);

        if (user && !action.isLoggedIn) {
            yield put(actions.loginSuccess({
                email: user.email,
                token: user.getIdToken(),
                uid: user.uid,
            }));
        }
    } catch (error) {}
}