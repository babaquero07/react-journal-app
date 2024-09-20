import { useSelector } from "react-redux";
import { CheckingAuth } from "./ui";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const JournalApp = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === "checking") return <CheckingAuth />;

  return <RouterProvider router={AppRouter} />;
};
