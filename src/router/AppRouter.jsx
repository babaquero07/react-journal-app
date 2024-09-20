import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { JournalRouter } from "../journal/routes/JournalRouter";
import { useCheckAuth } from "../hooks";

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
  const status = useCheckAuth();

  if (status === "checking") return <CheckingAuth />;

  return <RouterProvider router={router} />;
};
