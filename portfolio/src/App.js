import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";

const App=()=>{
  return(
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
    </div>
  )
}

export default App;