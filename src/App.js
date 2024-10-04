import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNav from "./components/template/Header";
import Footer from "./components/template/Footer";
import EncryptionEscitala from "./components/content/encryptions/EncryptionEscilata";
import Home from "./components/home";
import EncryptionCesar from "./components/content/encryptions/EncryptionCesar";
import EncryptionEdDsa from "./components/content/encryptions/EncryptionEdDsa";
import EncryptionRC5 from "./components/content/encryptions/EncryptionRC5";
import EncryptionTiger from "./components/content/encryptions/EncryptionTiger";




function App() {
  return (
    <>
      <div className="App">
        <Router>
          <HeaderNav/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Escilata" element={<EncryptionEscitala/>} />
              <Route path="/Cesar" element={<EncryptionCesar/>} />
              <Route path="/EdDsa" element={<EncryptionEdDsa/>} />
              <Route path="/Rc5" element={<EncryptionRC5/>} />
              <Route path="/Hash" element={<EncryptionTiger/>}/>       
            </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
