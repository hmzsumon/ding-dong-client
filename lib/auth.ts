import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { auth } from './firebase';

export const register = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password);

export const googleLogin = () => {
	const provider = new GoogleAuthProvider();
	return signInWithPopup(auth, provider);
};

export const logout = () => signOut(auth);
