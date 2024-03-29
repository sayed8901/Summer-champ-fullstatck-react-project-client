import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AnimatedSection from "../components/AOS-Animate/AnimatedSection";
import Login from "../pages/Login_register/Login";
import Register from "../pages/Login_register/Register";
import ErrorPage from "../pages/ErrorPage";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PopularInstructors from "../pages/Home/PopularInstructors";
import PopularClasses from "../pages/Home/PopularClasses";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import SelectedClasses from "../pages/Classes/Students/SelectedClasses";
import EnrolledClasses from "../pages/Classes/Students/EnrolledClasses";
import AllUsers from "../pages/AllUsers/AllUsers";
import AddClass from "../pages/Classes/Instructors/AddClass";
import ManageClasses from "../pages/Classes/Admin/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/Classes/Instructors/MyClasses";
import UpdateClassData from "../pages/Classes/Instructors/UpdateClassData";
import Payment from "../pages/Classes/Students/Payment/Payment";
import PaymentHistory from "../pages/Classes/Students/PaymentHistory";
import Feedback from "../pages/Classes/Admin/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <AnimatedSection>
            <Login></Login>
          </AnimatedSection>
        ),
      },
      {
        path: "/register",
        element: (
          <AnimatedSection>
            <Register></Register>
          </AnimatedSection>
        ),
      },
      {
        path: "/popular-instructors",
        element: (
          <AnimatedSection>
            <PopularInstructors></PopularInstructors>
          </AnimatedSection>
        ),
      },
      {
        path: "/popular-classes",
        element: (
          <AnimatedSection>
            <PopularClasses></PopularClasses>
          </AnimatedSection>
        ),
      },
      {
        path: "/instructors",
        element: (
          <AnimatedSection>
            <Instructors></Instructors>
          </AnimatedSection>
        ),
      },
      {
        path: "/classes",
        element: (
          <AnimatedSection>
            <Classes></Classes>
          </AnimatedSection>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // students / common users routes
      {
        path: "selected-classes",
        element: (
          <AnimatedSection>
            <SelectedClasses></SelectedClasses>
          </AnimatedSection>
        ),
      },
      {
        path: "enrolled-classes",
        element: (
          <AnimatedSection>
            <EnrolledClasses></EnrolledClasses>
          </AnimatedSection>
        ),
      },
      // payment routes for students class enrollment
      {
        path: "payment/:id",
        element: (
          <AnimatedSection>
            <Payment></Payment>
          </AnimatedSection>
        ),
      },
      {
        path: "payment-history",
        element: (
          <AnimatedSection>
            <PaymentHistory></PaymentHistory>
          </AnimatedSection>
        ),
      },

      // instructor only routes
      {
        path: "add-class",
        element: (
          <AnimatedSection>
            <InstructorRoute>
              <AddClass></AddClass>
            </InstructorRoute>
          </AnimatedSection>
        ),
      },
      {
        path: "my-all-classes",
        element: (
          <AnimatedSection>
            <InstructorRoute>
              <MyClasses></MyClasses>
            </InstructorRoute>
          </AnimatedSection>
        ),
      },
      {
        path: "my-all-classes/update-class/:id",
        element: (
          <AnimatedSection>
            <InstructorRoute>
              <UpdateClassData></UpdateClassData>
            </InstructorRoute>
          </AnimatedSection>
        ),
      },

      // admin only routes
      {
        path: "manage-classes",
        element: (
          <AnimatedSection>
            <AdminRoute>
              <ManageClasses></ManageClasses>
            </AdminRoute>
          </AnimatedSection>
        ),
      },
      {
        path: "manage-classes/feedback/:id",
        element: (
          <AnimatedSection>
            <AdminRoute>
              <Feedback></Feedback>
            </AdminRoute>
          </AnimatedSection>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AnimatedSection>
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          </AnimatedSection>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <AnimatedSection>
        <ErrorPage></ErrorPage>
      </AnimatedSection>
    ),
  },
]);

export default router;
