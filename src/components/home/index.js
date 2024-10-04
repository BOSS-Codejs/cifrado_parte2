import React from "react";
import { Route, Routes } from "react-router-dom";
import EncryptionEscitala from "../content/encryptions/EncryptionEscilata";
import EncryptionCesar from "../content/encryptions/EncryptionCesar";
import EncryptionEdDsa from "../content/encryptions/EncryptionEdDsa";
import EncryptionRC5 from "../content/encryptions/EncryptionRC5";
import EncryptionTiger from "../content/encryptions/EncryptionTiger";


const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EncryptionEscitala/>} />
        <Route path="/Cesar" element={<EncryptionCesar/>}/>
        <Route path="/EdDsa" element={<EncryptionEdDsa/>}/>    
        <Route path="/Rc5" element={<EncryptionRC5/>}/>       
        <Route path="/Hash" element={<EncryptionTiger/>}/>        
      </Routes>
    </>
  );
};

export default Home;
