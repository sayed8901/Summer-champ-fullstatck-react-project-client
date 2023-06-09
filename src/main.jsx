import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import AuthProvider from "./authProviders/AuthProvider";
import router from "./routes/Routes";

import { Toaster } from "react-hot-toast";

// tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LazyLoad>
          <RouterProvider router={router} />
        </LazyLoad>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
