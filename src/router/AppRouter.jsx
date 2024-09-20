import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { CheckingAuth } from "../ui";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { JournalRouter } from "../journal/routes/JournalRouter";

const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <AuthRouter />,
    children: AuthRoutes,
  },
  {
    path: "/",
    element: <JournalRouter />,
    children: JournalRoutes,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName: fullName, photoURL } = user;

      dispatch(login({ uid, email, fullName, photoURL }));
    });
  }, []);

  if (status === "checking") return <CheckingAuth />;

  return <RouterProvider router={router} />;
};
