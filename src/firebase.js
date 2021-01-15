import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDLqqN-AFLo08CFHf6OH36aaTIvE-loZpk",
  authDomain: "linkedin-clone-25a19.firebaseapp.com",
  projectId: "linkedin-clone-25a19",
  storageBucket: "linkedin-clone-25a19.appspot.com",
  messagingSenderId: "196539295680",
  appId: "1:196539295680:web:61deeb157b1e8a09404a25"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
