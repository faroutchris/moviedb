import { call, put } from 'redux-saga/effects';
import { auth } from './../api/firebase';
import { actions } from './../reducers/auth';
import {appHistory} from "../history";
import * as routes from "../constants/routes";

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
            yield call(appHistory.push, routes.LANDING);
        }
    } catch(error) {
        console.error(error);
        yield put(actions.signupFail(error));
    }
}