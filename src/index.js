import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes/routes";
import AuthProvider from "./context/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
              <RouterProvider router={router}></RouterProvider>
            </HelmetProvider>
        </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
