import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    FacebookAuthProvider,
    GoogleAuthProvider
} from "firebase/auth";


 
const firebaseConfig = {

    apiKey: "AIzaSyANW893d6UyMZ3Z-GpoWGhGhrs2zX6AlHQ",
  
    authDomain: "canabit-platform.firebaseapp.com",
  
    projectId: "canabit-platform",
  
    storageBucket: "canabit-platform.appspot.com",
  
    messagingSenderId: "683239611053",
  
    appId: "1:683239611053:web:fa4977ea881871a9140424",
  
    measurementId: "G-LLL97QCV3R"
  
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Auth = getAuth();


export default {
    Auth,
    FacebookAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    GoogleAuthProvider

}