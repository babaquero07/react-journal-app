import {
  loginWithEmailAndPassword,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
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

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailAndPassword({
        email,
        password,
        fullName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, email, fullName, photoURL }));
  };
};

export const startLoginWithEmailAndPassword = ({
  email: userEmail,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, fullName, email, photoURL, uid, errorMessage } =
      await loginWithEmailAndPassword({ userEmail, password });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, email, fullName, photoURL }));
  };
};
