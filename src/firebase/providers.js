import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
// This config is required to always show the Google account selection prompt
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  fullName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uuid, photoURL } = resp.user;

    // TODO: Update the user's profile with the full name on Firebase

    return {
      ok: true,
      uuid,
      photoURL,
      email,
      fullName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
