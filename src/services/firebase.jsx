import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDSP_XRbZ3XS5viXjMGKAOKC8-_vyGf-Cg",
  authDomain: "maxicom-celulares.firebaseapp.com",
  projectId: "maxicom-celulares",
  storageBucket: "maxicom-celulares.firebasestorage.app",
  messagingSenderId: "1011698656653",
  appId: "1:1011698656653:web:779c4dee0eb9c7f66909c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)