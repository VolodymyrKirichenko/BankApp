import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjuZz0fcQu7lBdkHGL4UBtu9wNPlP-pcs",
  authDomain: "bankapp-a4be8.firebaseapp.com",
  projectId: "bankapp-a4be8",
  storageBucket: "bankapp-a4be8.appspot.com",
  messagingSenderId: "252339679582",
  appId: "1:252339679582:web:2a9f622f35f41d0e081fcf",
  measurementId: "G-Q6J5N0GLPQ"
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();

