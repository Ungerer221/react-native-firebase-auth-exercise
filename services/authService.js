// TODO: Create Firebase Auth Functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// create your function below
export const handleLogin = (email, password) => {
    // paste the sign in code form docs
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("logged In User - " + user.email)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}
