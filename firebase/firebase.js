import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth"
import Router from "next/router";

const firebaseConfig = {
  apiKey: "AIzaSyAsDGNTkTj_FYvA6gRn3th1TLe5-Bba3DI",
  authDomain: "content-44924.firebaseapp.com",
  projectId: "content-44924",
  storageBucket: "content-44924.appspot.com",
  messagingSenderId: "710401083918",
  appId: "1:710401083918:web:f520fc772a43a67f7e4a5f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export const signIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        if(user){
            Router.push('/home')
        }
    }).catch((error) => {
        console.log(error)
    });
}

export const logOut = () => {
    signOut(auth).then(() => {
        Router.push('/')
      }).catch((error) => {
        console.log(error)
      });
}
