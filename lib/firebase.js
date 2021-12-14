import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYoRrOgelBwOF8rjodIKErqKKqbM8OTP4",
  authDomain: "blog-75530.firebaseapp.com",
  projectId: "blog-75530",
  storageBucket: "blog-75530.appspot.com",
  messagingSenderId: "840469279079",
  appId: "1:840469279079:web:2ad316f66b9ef7fdb27fc2",
  measurementId: "G-X3H5Q2L0RD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
