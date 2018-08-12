import { call, put } from 'redux-saga/effects';
import { auth } from './../api/firebase';
import { actions } from './../reducers/auth';
import { appHistory } from "../history";
import * as routes from './../constants/routes';

export default function* loginRequestSaga(action) {
    try{
        const res = yield call(auth.signInWithEmailAndPassword, action.email, action.password);
        if (res) {
            yield put(actions.loginSuccess({
                email: res.user.email,
                token: auth.getToken(),
                uid: res.user.uid,
                //isNewUser: res.user.additionalUserInfo.isNewUser,
                //emailVerified: res.user.emailVerified
            }));
            yield call(appHistory.push, routes.LANDING);
        }
    } catch(error) {
        console.log(error);
        yield put(actions.loginFail(error));
    }
}