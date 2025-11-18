import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import Request from "./pages/Request.jsx";
import Activity from "./pages/Activity.jsx";
import Functional from "./pages/Functional.jsx";
import "./app.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/EO-PK-AGU-MG-MKA">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="request" element={<Request />} />
          <Route path="activity" element={<Activity />} />
          <Route path="functional" element={<Functional />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
