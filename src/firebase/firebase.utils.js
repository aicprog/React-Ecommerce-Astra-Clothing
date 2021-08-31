import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDJJYG02nE87XpL7xT96fKZ_qPPTmP4Wro",
    authDomain: "astrac-db.firebaseapp.com",
    projectId: "astrac-db",
    storageBucket: "astrac-db.appspot.com",
    messagingSenderId: "398974785288",
    appId: "1:398974785288:web:fde698ab8a1761c14bfebd",
    measurementId: "G-FC458DXMYC"
};


firebase.initializeApp(config)

export const auth = firebase.auth() 
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithgoogle =() => auth.signInWithPopup(provider)

export default firebase;