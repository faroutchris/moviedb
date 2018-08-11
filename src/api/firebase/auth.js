import {auth} from './init';

export const createUserWithEmailAndPassword = auth.createUserWithEmailAndPassword;
export const signInWithEmailAndPassword = auth.signInWithEmailAndPassword;
export const sendPasswordResetEmail = auth.sendPasswordResetEmail;
export const updatePassword = (password) => auth.currentUser.updatePassword(password);
export const signOut = auth.signOut;
