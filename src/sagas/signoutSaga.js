import { call } from 'redux-saga/effects';
import { auth } from './../api/firebase';
import { appHistory } from "../history";
import * as routes from './../constants/routes';

export default function* signoutSaga(action) {
    try{
        yield call(auth.signOut);
        yield call(appHistory.push, routes.LANDING);
    } catch(error) {
        console.log(error);
    }
}