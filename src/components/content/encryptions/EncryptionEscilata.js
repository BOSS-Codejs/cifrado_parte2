import React, { useState } from "react";
import "./style/Cesar.css";

const EncryptionEscitala = () => {
  const [message, setMessage] = useState("");
  const [columns, setColumns] = useState("");
  const [result, setResult] = useState("");
  const [crypt, setCrypt] = useState("");
  const [error, setError] = useState("");

  const encrypt = () => {
    if (!message || columns <= 1) {
      alert("Por favor, introduce un mensaje y un número de columnas válido.");
      return;
    }
    const key = parseInt(columns);
    let cipherText = "";

    for (let i = 0; i < key; i++) {
      for (let j = i; j < message.length; j += key) {
        cipherText += message[j];
      }
    }
    setCrypt(cipherText);
    return cipherText.toUpperCase();
  };

  const decrypt = () => {
    if (!message || columns <= 1) {
      alert("Por favor, introduce un mensaje y un número de columnas válido.");
      return;
    }
    const key = parseInt(columns);
    let plainText = Array(crypt.length).fill("");
    let index = 0;

    for (let i = 0; i < key; i++) {
      for (let j = i; j < crypt.length; j += key) {
        plainText[j] = crypt[index++];
      }
    }
    return plainText.join("");
  };

  const handleCifrar = () => {
    const columnas = parseInt(columns, 10);
    if (isNaN(columnas) || columnas <= 0) {
      setError("Por favor, ingresa una clave válida (número de columnas).");
      return;
    }
    const cipherText = encrypt();
    setResult(cipherText);
  };

  const handleDescifrar = () => {
    const columnas = parseInt(columns, 10);
    if (isNaN(columnas) || columnas <= 0) {
      setError("Por favor, ingresa una clave válida (número de columnas).");
      return;
    }
    setError("");
    const plainText = decrypt().toUpperCase();
    setResult(plainText);
  };

  const copiarAlPortapapeles = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => alert("Texto copiado al portapapeles!"))
      .catch((err) => console.error("Error al copiar: ", err));
  };

  return (
    <>
      <div className="cipher-container">
        <div className="id-help">
          <h2>Método de Cifrado Escitala</h2>
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe el mensaje"
          />
        </div>

        <div className="form-group">
          <label htmlFor="columns">Número de columnas:</label>
          <input
            type="number"
            id="columns"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            min="2"
            placeholder="Introduce el número"
          />
        </div>

        <div className="button-group">
          <button onClick={handleCifrar} className="encrypt-btn">
            Cifrar
          </button>
          <button onClick={handleDescifrar} className="decrypt-btn">
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
                value={result}
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
    </>
  );
};

export default EncryptionEscitala;
