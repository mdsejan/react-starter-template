import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../pages/Layout/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import Error from "../pages/shared/Error/Error";
import Test from "../pages/test/test";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "dashboard",
    errorElement: <Error></Error>,
    element: <DashboardLayout></DashboardLayout>,
    children: [
      //Admin Routes
      {
        path: "admin",
        element: <AdminDashboard></AdminDashboard>,
      },

      //User Routes
      {
        path: "user",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  },

  {
    path: "/test",
    element: <Test></Test>,
  },
]);

export default router;
