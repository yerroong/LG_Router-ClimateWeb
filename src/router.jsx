import React from "react";
import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import NotFound from "./pages/NotFound/NotFound";

import HomePage from "./pages/Homepage/Homepage";
import DetailPage from "./pages/DetailPage/DetailPage";
import RegionPage from "./pages/RegionsPage/RegionsPage";
import InsightsPage from "./pages/InsightsPage/InsightsPage"
import AboutPage from "./pages/AboutPage/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "climate/:climateId", element: <DetailPage /> },
      { path: "regions", element: <RegionPage /> },
      { path: "insights", element: <InsightsPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
