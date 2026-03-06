// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQSapKMZvTLkqWFsd2aKz7o2oKpMCX6zY",
  authDomain: "netflix-gpt-d343b.firebaseapp.com",
  projectId: "netflix-gpt-d343b",
  storageBucket: "netflix-gpt-d343b.firebasestorage.app",
  messagingSenderId: "678537961957",
  appId: "1:678537961957:web:54a1f91ec295ff85edcf0c",
  measurementId: "G-S6EWQ8314C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// optional analytics, safe check
if (typeof window !== "undefined") {
  isSupported()
    .then((ok) => {
      if (ok) getAnalytics(app);
    })
    .catch(() => {});
}
