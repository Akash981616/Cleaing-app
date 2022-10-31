import React from 'react'
import AdminDashBoard from "./pages/AdminDashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import LoginPage from './pages/LoginPage'
import SignUpPage from "./pages/SignUpPage.js"

const App = () => {
                    // return (
                    //   <BrowserRouter>
                    //     <Routes>
                    //       {/* <SignUpPage /> */}
                    //        {/* <LoginPage /> */}
                    //       <DashBoard />
                    //     </Routes>
                    //   </BrowserRouter>
                    // );
                    return (
                      <>
                        {/* <SignUpPage /> */}
                        {/* <LoginPage /> */}
                        <AdminDashBoard />
                      </>
                    );
                  }

export default App