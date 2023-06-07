import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import AnimatedSection from "../components/AOS-Animate/AnimatedSection";
import Login from "../pages/Login_register/Login";
import Register from "../pages/Login_register/Register";
import ErrorPage from "../pages/ErrorPage";
import Main from "../layout/Main";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PopularInstructors from "../pages/Home/PopularInstructors";
import PopularClasses from "../pages/Home/PopularClasses";

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
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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