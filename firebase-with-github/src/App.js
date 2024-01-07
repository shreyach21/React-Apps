import React, { useState, useContext } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import firebaseConfig from "./config/firebaseConfig";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Pagenotfound from "./pages/Pagenotfound";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { Usercontext } from "./context/Usercontext";
import "./App.css"
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <Usercontext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Signin" Component={Signin} />
          <Route exact path="/Signup" Component={Signup} />
          <Route exact path="*" Component={Pagenotfound} />
        </Routes>
        <Footer />
      </Usercontext.Provider>
    </Router>
  );
}

export default App;