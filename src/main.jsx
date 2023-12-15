import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </>
  </BrowserRouter>
);
