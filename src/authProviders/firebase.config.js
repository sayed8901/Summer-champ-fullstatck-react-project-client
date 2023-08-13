// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,



//   apiKey: "AIzaSyBUJgVdkSoAbKIjM2rsRIQy-8Uv5ul6GV4",
//   authDomain: "summer-champ-school-camping.firebaseapp.com",
//   projectId: "summer-champ-school-camping",
//   storageBucket: "summer-champ-school-camping.appspot.com",
//   messagingSenderId: "490942082339",
//   appId: "1:490942082339:web:ccfd1e23c0e76ceaba7096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;