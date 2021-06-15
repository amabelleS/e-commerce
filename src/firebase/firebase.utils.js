import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBChlhaw8F50s30l9WFysby8ll8bgKJnqk",
    authDomain: "tribal-commerce-db.firebaseapp.com",
    projectId: "tribal-commerce-db",
    storageBucket: "tribal-commerce-db.appspot.com",
    messagingSenderId: "809300238209",
    appId: "1:809300238209:web:d189f03b912939a77c5280",
    measurementId: "G-GZ5TJ0D6RB"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot, userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;