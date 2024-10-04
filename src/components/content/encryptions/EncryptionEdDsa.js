import React, { useState } from 'react';
import { generateKeyPair, signMessage, verifyMessage } from './library/libEdDsa';
import './style/EdDsa.css'; 

const EncryptionEdDsa = () => {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [isVerified, setIsVerified] = useState(null);

  const handleGenerateKeys = () => {
      const { publicKey, privateKey } = generateKeyPair();
      setPublicKey(publicKey);
      setPrivateKey(privateKey);
  };

  const handleSignMessage = () => {
      if (message && privateKey) {
          const signature = signMessage(message, privateKey);
          setSignature(signature);
      }
  };

  const handleVerifyMessage = () => {
      if (message && signature && publicKey) {
          const verified = verifyMessage(message, signature, publicKey);
          setIsVerified(verified);
      }
  };

  return (
      <div className="container">
          <h1>Cifrado EdDSA</h1>
          <div className="inputContainer">
              <textarea
                  placeholder="Escribe un mensaje..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="textarea"
              />
              <button onClick={handleGenerateKeys} className="button">
                  Generar Claves
              </button>
          </div>
          <div className="outputContainer">
              <p>Clave Pública:</p>
              <textarea readOnly value={publicKey} className="textarea" />
              <p>Clave Privada:</p>
              <textarea readOnly value={privateKey} className="textarea" />
          </div>
          <button onClick={handleSignMessage} className="button">
              Firmar Mensaje
          </button>
          <div className="outputContainer">
              <p>Firma:</p>
              <textarea readOnly value={signature} className="textarea" />
          </div>
          <button onClick={handleVerifyMessage} className="button">
              Verificar Mensaje
          </button>
          {isVerified !== null && (
              <p>{isVerified ? 'El mensaje es válido' : 'El mensaje no es válido'}</p>
          )}
      </div>
  );
};

export default EncryptionEdDsa;
