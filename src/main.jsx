import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import AuthProvider from "./authProviders/AuthProvider";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LazyLoad>
        <RouterProvider router={router} />
      </LazyLoad>
    </AuthProvider>
  </React.StrictMode>
);
