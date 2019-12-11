import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';

// initialize our app. So we want a function that returns the app

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseKeys);
  }
};

export default firebaseApp;