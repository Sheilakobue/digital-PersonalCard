import React from "react";
import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";



export default function App() {
  return (
    
    <div className="card">
    
      <Info />
      
      <div className="container">
        <About />
        <hr/>

        <Skills />
        <hr/>
      </div>
      <Footer />
    </div>
  );
}

