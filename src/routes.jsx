// import React from "react";
// import "./index.css";
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
// import GlobalLayout from "./layout/GlobalLayout";
// import Landing from "./pages/landing";
// import Profiling from "./pages/profiling";
// import Dashboard from "./pages/dashboard";
// import Courses from "./pages/courses";
// import Catalog from "./pages/coursecatalog";
// import UserProfile from "./pages/userprofile";
// import Jobs from "./pages/Jobs/Jobs";
// import DatasetsScreen from "./pages/Datasets/DatasetsScreen";
// import CourseScreen from "./pages/courseScreen";

// export const routes = createBrowserRouter([
//     { 
//       path: "/app",
//       element: <GlobalLayout/>,
//       children: [
//         {
//           path: "/app/landing",
//           element: <Landing/>,
//         },
//         {
//           path: "/app/register",
//           element: <Profiling/>,
//         },
//         {
//           path: "/app/dashboard",
//           element: <Dashboard/>,
//         },
//         {
//           path: "/app/courses",
//           element: <Courses/>,
//         },
//         {
//           path: "/app/courses/catalog",
//           element: <Catalog/>,
//         },
//         {
//           path: "/app/courses/course-screen",
//           element: <CourseScreen/>,
//         },
//         {
//           path: "/app/userprofile",
//           element: <UserProfile/>,
//         },
//         {
//           path: "/app/jobs",
//           element: <Jobs/>,
//         },
//         {
//           path: "/app/datasets",
//           element: <DatasetsScreen/>,
//         },
//       ]
//     },
    
//   ]);

import React from "react";
import "./index.css";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import Landing from "./pages/landing";
import Profiling from "./pages/profiling";
import Dashboard from "./pages/dashboard";
import Courses from "./pages/courses";
import Catalog from "./pages/coursecatalog";
import UserProfile from "./pages/userprofile";
import Jobs from "./pages/Jobs/Jobs";
import DatasetsScreen from "./pages/Datasets/DatasetsScreen";
import CourseScreen from "./pages/courseScreen";
import LessonScreen from "./pages/lessonScreen";
import ProtectedRoute from "./components/ProtectedRoute";

export const routes = createBrowserRouter([
    {
      path: "/app",
      element: <GlobalLayout/>,
      children: [
        
        {
          path: "/app/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "/app/courses",
          element: (
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          ),
        },
        {
          path: "/app/courses/catalog",
          element: (
            <ProtectedRoute>
              <Catalog />
            </ProtectedRoute>
          ),
        },
        {
          path: "/app/courses/course-screen",
          element: (
            <ProtectedRoute>
              <CourseScreen />
            </ProtectedRoute>
          ),
        },
        {
          path: "/app/courses/courseScreen",
          element: <CourseScreen/>,
        },
        {
          path: "/app/userprofile",
          element: (
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/app/jobs",
          element: (
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/app/datasets",
          element: (
            <ProtectedRoute>
              <DatasetsScreen />
            </ProtectedRoute>
          ),
        },
      ]
    },
    
    {
      path: "/courses/lessonScreen",
      element: <LessonScreen/>,
    },
     {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/register",
      element: <Profiling />,
    },
]);
