// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  production: false,
  apiKey: "AIzaSyBJNv5JqepCR-fmAWHYeNRe4P93Ml99moc",
  authDomain: "ionicyfirebase.firebaseapp.com",
  projectId: "ionicyfirebase",
  storageBucket: "ionicyfirebase.appspot.com",
  messagingSenderId: "412819333137",
  appId: "1:412819333137:web:e3f62ffd9a90398dced1b0",
  measurementId: "G-Q9MWH149ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//comando de instalación firebase: npm install firebase @angular/fire --save
