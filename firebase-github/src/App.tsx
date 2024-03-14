import React ,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import {BrowserRouter as Router, Route,Link} from "react-router-dom"

import firebase from 'firebase/compat/app'
import "firebase/auth"

import Home from "./pages/Home"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './context/Usercontext'


const App=()=> {
  const [user,setUser]=useState(null);
  return (
   <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
      <Route path="/" Component={Home}/>
      <Route path="/Signin" Component={SignIn}/>
      <Route path="/Signup" Component={SignUp}/>
      <Route path="/Pagenotfound" Component={PageNotFound}/>
    </UserContext.Provider>
   </Router>
  )
}

export default App;