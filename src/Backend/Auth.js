import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "synapse-13596.firebaseapp.com",
  databaseURL: "https://synapse-13596-default-rtdb.firebaseio.com",
  projectId: "synapse-13596",
  storageBucket: "synapse-13596.appspot.com",
  messagingSenderId: "420665305841",
  appId: "1:420665305841:web:0638ee2f0df2a989201750",
  measurementId: "G-K0M4BQECLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();

const googleProvider = new GoogleAuthProvider();

function writeUserData(email, username, userId){
  const db = getDatabase();
  try{
    set(ref(db, 'users/' + userId), {
      username: username,
      email: email,
    });
  }
  catch(e){
    console.log(e)
    alert(e)
  }
}

async function createUserEmail(email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    writeUserData(email, username, user.uid)
    alert("Success!")
    return user;
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage)
    throw new Error(errorMessage);
  }
}

function createUserGoogle(){
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    writeUserData(user.email, user.displayName, user.uid)
    alert("Success!")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorCode)
    // ...
  });

}

export { createUserEmail, createUserGoogle }