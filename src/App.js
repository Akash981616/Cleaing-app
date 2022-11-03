import React from "react";
import AdminDashBoard from "./pages/AdminDashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
