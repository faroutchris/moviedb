import { call, put } from 'redux-saga/effects';
import { firebase, auth } from './../api/firebase';
import { actions } from './../reducers/auth';
import { appHistory } from "../history";
import * as routes from './../constants/routes';

export default function* autoLoginRequestSaga(action) {
    console.log('is here ', action)
    try {
        const { user } = action;
        if (user) {
            console.log(user)
            yield put(actions.loginSuccess({
                email: user.email,
                token: user.getIdToken(),
                uid: user.uid,
            }));
            yield call(appHistory.push, routes.LANDING);
        }
    } catch (error) {
        console.log(error);
        yield put(actions.loginFail(error));
    }
}