import React from "react";
import AdminDashBoard from "./pages/AdminDashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage.js";
// import { MantineProvider } from "@mantine/core";
// import { ModalsProvider } from "@mantine/modals";
import { StyledEngineProvider } from "@mui/material/styles";
import UserPage from "./pages/UserPage";
import ContractPage from "./pages/ContractPage";
import ReportPage from "./pages/ReportPage";
import InpectionPage from "./pages/InpectionPage";
import DashBoard from "./pages/DashBoard";
import PropertyPage from "./pages/PropertyPage";
const App = () => {
  return (
    <BrowserRouter>
      {/* <MantineProvider>
        <ModalsProvider> */}
      <StyledEngineProvider injectFirst></StyledEngineProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="home" element={<AdminDashBoard />}>
          <Route path="user" element={<UserPage />} />
          <Route path="contract-page" element={<ContractPage />} />
          <Route path="report-page" element={<ReportPage />} />
          <Route path="inpection-page" element={<InpectionPage />} />
          <Route path="dashBoard" element={<DashBoard />} />
          <Route path="property-page" element={<PropertyPage/>}></Route>
        </Route>
      </Routes>
      {/* </ModalsProvider>
      </MantineProvider> */}
    </BrowserRouter>
  );
};

export default App;
