import App from "@/App";
import ProtectedRoute from "@/layouts/ProtectedRoute";
import Home from "@/pages/home/Home";
import LoginPage from "@/pages/login/LoginPage";
import OfferPage from "@/pages/offer/OfferPage";
import RegisterPage from "@/pages/register/RegisterPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const guestRoutes: RouteObject[] = [
  {
    element: <RegisterPage />,
    path: "/register",
  },
  {
    element: <LoginPage />,
    path: "/login",
  },
];

const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedRoute element={<Home />} />,
    path: "/",
  },
  {
    element: <ProtectedRoute element={<OfferPage />} />,
    path: "/offers/:id",
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [...guestRoutes, ...protectedRoutes],
  },
];

export const router = createBrowserRouter(routes);
