import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0XOA6OoANLzYz1zN6reMe1Cks_qRbglM",
  authDomain: "bitstorage-ff7a6.firebaseapp.com",
  projectId: "bitstorage-ff7a6",
  storageBucket: "bitstorage-ff7a6.appspot.com",
  messagingSenderId: "302326072861",
  appId: "1:302326072861:web:7f35e35f217abc5e5428f4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
