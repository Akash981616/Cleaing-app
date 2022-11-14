import React from "react";
import AdminDashBoard from "./pages/AdminDashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.js";
// import { MantineProvider } from "@mantine/core";
// import { ModalsProvider } from "@mantine/modals";
import { StyledEngineProvider } from "@mui/material/styles";
const App = () => {
  return (
    <BrowserRouter>
      {/* <MantineProvider>
        <ModalsProvider> */}{" "}
      <StyledEngineProvider injectFirst></StyledEngineProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
      </Routes>
      {/* </ModalsProvider>
      </MantineProvider> */}
    </BrowserRouter>
  );
};

export default App;
