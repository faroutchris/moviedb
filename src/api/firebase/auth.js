import {auth} from './init';

export const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const sendPasswordResetEmail = (email) => auth.sendPasswordResetEmail(email);
export const signOut = () => auth.signOut();

export const updatePassword = (password) => auth.currentUser.updatePassword(password);
export const getToken = () => auth.currentUser.getIdToken();
export const sendEmailVerification = () => auth.currentUser.sendEmailVerification();
