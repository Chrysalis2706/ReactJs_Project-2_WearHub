import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgStH0eneHq78WBjtaPgvfk-IYGVDeWiA",
  authDomain: "wearhub-db.firebaseapp.com",
  projectId: "wearhub-db",
  storageBucket: "wearhub-db.appspot.com",
  messagingSenderId: "459869070324",
  appId: "1:459869070324:web:4b8fde55939eb28fc24fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// setup firestore

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);

  if (!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }catch (error){
      console.log(new Error("Error message"), error);
    }
  }

  return userDocRef;
};