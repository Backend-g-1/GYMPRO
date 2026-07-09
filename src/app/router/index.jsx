import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import AdminLayout from "../../layouts/AdminLayout";

import HomePage from "../../pages/Home/HomePage";
import TrainersPage from "../../pages/Trainers/TrainersPage";
import TrainerDetailsPage from "../../pages/Trainers/TrainerDetailsPage";
import MembershipsPage from "../../pages/Memberships/MembershipsPage";
import ClassesPage from "../../pages/Classes/ClassesPage";
import BookingPage from "../../pages/Booking/BookingPage";
import LoginPage from "../../pages/Auth/LoginPage";
import RegisterPage from "../../pages/Auth/RegisterPage";
import ProfilePage from "../../pages/Profile/ProfilePage";

import DashboardPage from "../../pages/Admin/DashboardPage";
import TrainersAdminPage from "../../pages/Admin/TrainersAdminPage";
import MembershipAdminPage from "../../pages/Admin/MembershipAdminPage";
import ClassesAdminPage from "../../pages/Admin/ClassesAdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "trainers",
        element: <TrainersPage />,
      },
      {
        path: "trainers/:id",
        element: <TrainerDetailsPage />,
      },
      {
        path: "memberships",
        element: <MembershipsPage />,
      },
      {
        path: "classes",
        element: <ClassesPage />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "trainers",
        element: <TrainersAdminPage />,
      },
      {
        path: "memberships",
        element: <MembershipAdminPage />,
      },
      {
        path: "classes",
        element: <ClassesAdminPage />,
      },
    ],
  },
]);
