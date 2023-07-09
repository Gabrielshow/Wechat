import { initializeApp } from " firebase/app";
import {getAuth} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyA8r0aYMXw-hS3hFwOOkzHEwqS6NCiCypU",
  authDomain: "wechat-fcaef.firebaseapp.com",
  projectId: "wechat-fcaef",
  storageBucket: "wechat-fcaef.appspot.com",
  messagingSenderId: "310861930294",
  appId: "1:310861930294:web:3af17316862a1b00685d97"
})

const auth = getAuth(app);

export { auth }