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

export const routes = createBrowserRouter([
    { 
      path: "/app",
      element: <GlobalLayout/>,
      children: [
        {
          path: "/app/landing",
          element: <Landing/>,
        },
        {
          path: "/app/register",
          element: <Profiling/>,
        },
        {
          path: "/app/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/app/courses",
          element: <Courses/>,
        },
        {
          path: "/app/courses/catalog",
          element: <Catalog/>,
        },
        {
          path: "/app/courses/course-screen",
          element: <CourseScreen/>,
        },
        {
          path: "/app/userprofile",
          element: <UserProfile/>,
        },
        {
          path: "/app/jobs",
          element: <Jobs/>,
        },
        {
          path: "/app/datasets",
          element: <DatasetsScreen/>,
        },
      ]
    },
    
  ]);