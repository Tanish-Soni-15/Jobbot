import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnalyzePage from "./pages/AnalyzePage";

import { ToastContainer } from "react-toastify";
import About from "./pages/About";
import Result from "./pages/Result";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import Account from "./pages/Account";
import NetworkStatusBanner from "./components/NetworkStatusBanner";
function App() {
  const [user, setuser] = useState(null);
  const checkUser = async () => {
    
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkUser`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok) {
      setuser(data);
    } 
  };
  useEffect(() => {
    checkUser();
  }, []);
  const [count, setCount] = useState(0);
   
   
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        theme="colored"
      />
       <NetworkStatusBanner/>
      <Routes>
        <Route path="/" element={<Home user={user} setuser={setuser} />} />
        <Route path="/analyze" element={<AnalyzePage setuser={setuser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/account" element={<Account user={user} setuser={setuser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
