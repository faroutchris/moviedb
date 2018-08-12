import {auth} from './init';
import * as firebase from "./init";

export const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const sendPasswordResetEmail = (email) => auth.sendPasswordResetEmail(email);
export const signOut = () => auth.signOut();

export const getToken = () => auth.currentUser.getIdToken();
export const sendEmailVerification = () => auth.currentUser.sendEmailVerification();
export const getUserSession = () => new Promise((resolve, reject) => {
    const rejectError = new Error('No active session.');
    firebase.auth.onAuthStateChanged(
        authUser => {
            if (authUser) {
                resolve(authUser)
            } else {
                reject(rejectError)
            }
        },
        error => reject(error),
    )
});