import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB45hiF1GD0qxJ_ZRj3IfV31pOrJzr5HKw",
  authDomain: "sitecroissens.firebaseapp.com",
  projectId: "sitecroissens",
  storageBucket: "sitecroissens.appspot.com",
  messagingSenderId: "1009267990375",
  appId: "1:1009267990375:web:892691f9510747518299c2",
  measurementId: "G-0VCJZKTJET",
};

initializeApp(firebaseConfig);

const db = getFirestore(app);
//const analytics = getAnalytics(app);

export { app, db };
