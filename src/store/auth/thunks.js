import {
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  fullName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailAndPassword({
      email,
      password,
      fullName,
    });
    console.log("🚀 ~ return ~  result:", result);
    // if (!result.ok) return dispatch(logout(result));

    // dispatch(login(result));
  };
};
