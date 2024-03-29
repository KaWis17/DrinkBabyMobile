import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWPN7lvD20luj2aCnza50LaB4lrgNAKaU",
  authDomain: "drinkbaby-a25cc.firebaseapp.com",
  projectId: "drinkbaby-a25cc",
  storageBucket: "drinkbaby-a25cc.appspot.com",
  messagingSenderId: "611137086631",
  appId: "1:611137086631:web:4f833d8cc2652c7bc16782",
  measurementId: "G-5CFQDK63R7"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const firestore = getFirestore(app);
export const storage = getStorage(app)
