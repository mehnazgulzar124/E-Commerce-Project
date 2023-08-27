import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// import SideBar from "./components/sideBar";

function App() {
  return (
    <>
      <NavBar />
      {/* <div className="flex"> */}
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
