import nacl from "tweetnacl";
import { encode as encodeBase64, decode as decodeBase64 } from "base64-arraybuffer";

export function generateKeyPair() {
    const keyPair = nacl.sign.keyPair();
    return {
        publicKey: encodeBase64(keyPair.publicKey),
        privateKey: encodeBase64(keyPair.secretKey),
    };
}
// Función para firmar un mensaje usando una clave privada
export function signMessage(message, privateKey) {
    const key = new Uint8Array(decodeBase64(privateKey));
    const messageUint8 = new TextEncoder().encode(message);
    const signedMessage = nacl.sign(messageUint8, key); 
    const signature = signedMessage.slice(0, nacl.sign.signatureLength);
    return encodeBase64(signature); 
}
// Función para verificar la autenticidad de un mensaje usando una clave pública y firma
export function verifyMessage(message, signature, publicKey) {
    const pubKey = new Uint8Array(decodeBase64(publicKey));
    const signatureUint8 = new Uint8Array(decodeBase64(signature));

    if (signatureUint8.length !== nacl.sign.signatureLength) {
        console.error('Tamaño de firma incorrecto:', signatureUint8.length);
        throw new Error('La firma tiene un tamaño incorrecto.');
    }

    const messageUint8 = new TextEncoder().encode(message);
    const isVerified = nacl.sign.detached.verify(messageUint8, signatureUint8, pubKey);
    return isVerified;
}