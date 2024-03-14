import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

const App=()=>{
  return(
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <SocialLinks/>
    </div>
  )
}

export default App;