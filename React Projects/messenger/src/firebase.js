import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC0kWazoBNycXakqZkMvtGJJ0UXxRn9bTE",
        authDomain: "messenger-clone-bfd95.firebaseapp.com",
        databaseURL: "https://messenger-clone-bfd95.firebaseio.com",
        projectId: "messenger-clone-bfd95",
        storageBucket: "messenger-clone-bfd95.appspot.com",
        messagingSenderId: "648569431079",
        appId: "1:648569431079:web:d3ebb46d79fabd82009a02",
        measurementId: "G-7T3SWREVZ8"
    })

    const db = firebaseApp.firestore();

    export default db;
