import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";
import AdminLayout from "../../layouts/AdminLayout";

const HomePage = lazy(() => import("../../pages/Home/HomePage"));
const TrainersPage = lazy(() => import("../../pages/Trainers/TrainersPage"));
const TrainerDetailsPage = lazy(() =>
  import("../../pages/Trainers/TrainerDetailsPage")
);
const MembershipsPage = lazy(() =>
  import("../../pages/Memberships/MembershipsPage")
);
const ClassesPage = lazy(() => import("../../pages/Classes/ClassesPage"));
const ClassDetailsPage = lazy(() =>
  import("../../pages/Classes/ClassDetailsPage")
);
const TestimonialsPage = lazy(() =>
  import("../../pages/Testimonials/TestimonialsPage")
);
const ContactPage = lazy(() => import("../../pages/Contact/ContactPage"));
const BookingPage = lazy(() => import("../../pages/Booking/BookingPage"));
const LoginPage = lazy(() => import("../../pages/Auth/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/Auth/RegisterPage"));
const ProfilePage = lazy(() => import("../../pages/Profile/ProfilePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFound/NotFoundPage"));

const DashboardPage = lazy(() => import("../../pages/Admin/DashboardPage"));
const TrainersAdminPage = lazy(() =>
  import("../../pages/Admin/TrainersAdminPage")
);
const MembershipAdminPage = lazy(() =>
  import("../../pages/Admin/MembershipAdminPage")
);
const ClassesAdminPage = lazy(() =>
  import("../../pages/Admin/ClassesAdminPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "trainers", element: <TrainersPage /> },
      { path: "trainers/:id", element: <TrainerDetailsPage /> },
      { path: "memberships", element: <MembershipsPage /> },
      { path: "classes", element: <ClassesPage /> },
      { path: "classes/:id", element: <ClassDetailsPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "trainers", element: <TrainersAdminPage /> },
      { path: "memberships", element: <MembershipAdminPage /> },
      { path: "classes", element: <ClassesAdminPage /> },
    ],
  },
]);
