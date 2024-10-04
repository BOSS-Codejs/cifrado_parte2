import React, { useState } from "react";
import { rc5Encrypt, rc5Decrypt } from "./library/linRc5";
import "./style/Rc5.css";

const EncryptionRC5 = () => {
  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [key, setKey] = useState("");

  const handleEncrypt = () => {
    const encrypted = rc5Encrypt(plaintext, key);
    setCiphertext(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = rc5Decrypt(ciphertext, key);
    setCiphertext(decrypted.trim());
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard
      .writeText(ciphertext)
      .then(() => alert("Texto copiado al portapapeles!"))
      .catch((err) => console.error("Error al copiar: ", err));
  };

  return (
    <div className="cipher-container">
      <div className="id-help">
        <h2>Método de Cifrado RC5</h2>
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
          placeholder="Escribe el mensaje"
        />
      </div>

      <div className="form-group">
        <label htmlFor="columns">Número de desplazamineto:</label>
        <input
          type="text"
          id="columns"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Introduce el número"
        />
      </div>

      <div className="button-group">
        <button onClick={handleEncrypt} className="encrypt-btn">
          Cifrar
        </button>
        <button onClick={handleDecrypt} className="decrypt-btn">
          Descifrar
        </button>
      </div>

      <div className="result">
        <h3>Resultado:</h3>
        <div className="form-group-copy">
          <div>
            <input
              className="input-result"
              type="text"
              id="columns"
              value={ciphertext}
              onChange={(e) => setCiphertext(e.target.value)}
            />
          </div>
          <div>
            <button
              className="decrypt-btn-copy "
              onClick={copiarAlPortapapeles}
            >
              copiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncryptionRC5;


