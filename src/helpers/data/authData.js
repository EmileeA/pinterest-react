import firebase from 'firebase/app';
import 'firebase/auth';

// call firebase auth and reference the current user and their uid
const getUid = () => firebase.auth().currentUser.uid;

export default { getUid };
