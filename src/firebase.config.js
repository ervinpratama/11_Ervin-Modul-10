import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZ9VbID4hcKD7jsnpN2BZw7I50qvSaLLM",
    authDomain: "pbf-modul-10-7bb96.firebaseapp.com",
    projectId: "pbf-modul-10-7bb96",
    storageBucket: "pbf-modul-10-7bb96.appspot.com",
    messagingSenderId: "810874505282",
    appId: "1:810874505282:web:043bdc083f91f65f3045db",
    measurementId: "G-B1S198RFW4"
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();

export { auth, authentication }