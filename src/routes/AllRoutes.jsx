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
import BookSearch from "../pages/Books";
import BookDetails from "../components/BookDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import DashboardApprove from "../features/dashboard/BookApprove";
import AddBooks from "../pages/AddBook";
import AllBooks from "../features/dashboard/AllBooks";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
        { path: '/books', element: <BookSearch/> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
       { path: '/contact', element: <Contact /> },
        { path: '/add-books', element: <AddBooks /> },
       { path: '/about', element: <About /> },
       { path: '/book/:id', element: <BookDetails /> },
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
      { path: 'all-books', element: <AllBooks /> },
       { path: 'book-approve', element: <DashboardApprove /> },
    ],
  },
]);

export default router;
