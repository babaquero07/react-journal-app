import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
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

    const { uid, photoURL } = resp.user;

    // Update the user's profile with the full name on Firebase
    await updateProfile(FirebaseAuth.currentUser, {
      displayName: fullName,
    });

    return {
      ok: true,
      uid,
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

export const loginWithEmailAndPassword = async ({ userEmail, password }) => {
  try {
    const loginData = {
      email: userEmail,
      password,
    };

    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      loginData.email,
      loginData.password
    );

    const { displayName, email, photoURL, uid } = resp.user;

    return {
      ok: true,
      fullName: displayName,
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

export const logout = async () => {
  return await FirebaseAuth.signOut();
};
