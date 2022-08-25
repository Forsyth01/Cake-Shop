import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDn1qdc1UjbsHO1_1UakX2NMm_d2JI8HSg",
    authDomain: "my-store-86abd.firebaseapp.com",
    projectId: "my-store-86abd",
    storageBucket: "my-store-86abd.appspot.com",
    messagingSenderId: "200864005348",
    appId: "1:200864005348:web:dd1a05c2bf04f7899840f1"
  };

 const app = initializeApp(firebaseConfig);
 
 export const db = getFirestore(app);
// init services

// collection red

// get colection