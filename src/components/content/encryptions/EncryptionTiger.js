import React, { useState } from "react";
import { tigerHash } from "./library/libTiger";
import "./style/Tiger.css"

const EncryptionTiger = () => {
  const [inputValue, setInputValue] = useState("");
  const [hashValue, setHashValue] = useState("");

  const handleHash = () => {
    setHashValue(tigerHash(inputValue));
  };

  return (
    <div className="tiger-hash-container">
      <h1>Tiger Hash Generator</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleHash}>Generate Hash</button>
      <p>Hash: {hashValue}</p>
    </div>
  );
};

export default EncryptionTiger;
