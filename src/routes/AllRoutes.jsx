import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardHome from "../features/dashboard/DashboardHome";
import AllUsers from "../features/dashboard/AllUsers";
import AddBooks from "../features/dashboard/AddBooks";
import AllBooks from "../features/dashboard/AllBooks";
import Books from "../pages/Books";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
        { path: '/books', element: <Books /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: '', element: <DashboardHome /> },
      { path: 'all-users', element: <AllUsers /> },
      { path: 'add-books', element: <AddBooks /> },
      { path: 'all-books', element: <AllBooks /> },
    ],
  },
]);

export default router;
