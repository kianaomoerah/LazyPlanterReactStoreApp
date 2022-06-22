import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAgqhEw4wj7Uqmvj5nxroit08welLSfRKE",
  authDomain: "the-lazy-planter-store.firebaseapp.com",
  projectId: "the-lazy-planter-store",
  storageBucket: "the-lazy-planter-store.appspot.com",
  messagingSenderId: "759841365297",
  appId: "1:759841365297:web:e25b6188bfcb35874e6410"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;