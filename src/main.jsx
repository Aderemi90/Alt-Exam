import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App";
import Home from "./Pages/HomePage";
import RepoDetails from "./Pages/Repositories";
import Fallback from "./Pages/ErrorBoundary";
import Error404 from "./Pages/404";

function ErrorBoundaryWrapper({ children }) {
  return <ErrorBoundary FallbackComponent={Fallback}>{children}</ErrorBoundary>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ErrorBoundaryWrapper>
            <Home />
          </ErrorBoundaryWrapper>
        }
      />
      <Route
        path="/repodetails/:id"
        element={
          <ErrorBoundaryWrapper>
            <RepoDetails />
          </ErrorBoundaryWrapper>
        }
      />
      <Route path="*" element={<Error404 />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
