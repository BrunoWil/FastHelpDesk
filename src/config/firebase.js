import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdrycyQUU0BNv3-3mqs4nIEomljZwGJTI",
    authDomain: "fasthelp-34a33.firebaseapp.com",
    databaseURL: "https://fasthelp-34a33.firebaseio.com",
    projectId: "fasthelp-34a33",
    storageBucket: "fasthelp-34a33.appspot.com",
    messagingSenderId: "932581126739",
    appId: "1:932581126739:web:136c1f4edf05d2584c4ca6",
    measurementId: "G-29S92TTKXQ"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  firebase.analytics();