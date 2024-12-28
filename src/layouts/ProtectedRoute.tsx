import { useIsAuthenticated } from "@/store/features/userSlice";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  element: JSX.Element;
  unauthorizedRedirectPath?: string;
};
const ProtectedRoute = ({
  element,
  unauthorizedRedirectPath = "/login",
}: ProtectedRouteProps) => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to={unauthorizedRedirectPath} />;
  }
  return element;
};

export default ProtectedRoute;
