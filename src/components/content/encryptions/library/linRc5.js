
const WORD_SIZE = 32;
const ROUNDS = 12;    
const P32 = 0xb7e15163;
const Q32 = 0x9e3779b9;

function rotateLeft(x, y) {
  return ((x << y) | (x >>> (WORD_SIZE - y))) >>> 0;
}

function rotateRight(x, y) {
  return ((x >>> y) | (x << (WORD_SIZE - y))) >>> 0;
}


function expandKey(key) {
  const S = new Array(2 * (ROUNDS + 1));
  S[0] = P32;

  for (let i = 1; i < S.length; i++) {
    S[i] = (S[i - 1] + Q32) >>> 0;
  }

  const L = [];
  for (let i = 0; i < key.length / 4; i++) {
    L[i] = (key.charCodeAt(i * 4) | (key.charCodeAt(i * 4 + 1) << 8) | (key.charCodeAt(i * 4 + 2) << 16) | (key.charCodeAt(i * 4 + 3) << 24)) >>> 0;
  }

  let A = 0, B = 0;
  let i = 0, j = 0;
  let v = 3 * Math.max(L.length, S.length);

  for (let k = 0; k < v; k++) {
    A = S[i] = rotateLeft((S[i] + A + B) >>> 0, 3);
    B = L[j] = rotateLeft((L[j] + A + B) >>> 0, (A + B) >>> 0);
    i = (i + 1) % S.length;
    j = (j + 1) % L.length;
  }

  return S;
}
export function rc5Encrypt(plaintext, key) {
  const S = expandKey(key);
  let A = (plaintext.charCodeAt(0) | (plaintext.charCodeAt(1) << 8) | (plaintext.charCodeAt(2) << 16) | (plaintext.charCodeAt(3) << 24)) >>> 0;
  let B = (plaintext.charCodeAt(4) | (plaintext.charCodeAt(5) << 8) | (plaintext.charCodeAt(6) << 16) | (plaintext.charCodeAt(7) << 24)) >>> 0;

  A = (A + S[0]) >>> 0;
  B = (B + S[1]) >>> 0;

  for (let i = 1; i <= ROUNDS; i++) {
    A = (rotateLeft((A ^ B), B) + S[2 * i]) >>> 0;
    B = (rotateLeft((B ^ A), A) + S[2 * i + 1]) >>> 0;
  }

  return [
    (A & 0xFF), ((A >>> 8) & 0xFF), ((A >>> 16) & 0xFF), ((A >>> 24) & 0xFF),
    (B & 0xFF), ((B >>> 8) & 0xFF), ((B >>> 16) & 0xFF), ((B >>> 24) & 0xFF)
  ].map(b => String.fromCharCode(b)).join('');
}


export function rc5Decrypt(ciphertext, key) {
  const S = expandKey(key);
  let A = (ciphertext.charCodeAt(0) | (ciphertext.charCodeAt(1) << 8) | (ciphertext.charCodeAt(2) << 16) | (ciphertext.charCodeAt(3) << 24)) >>> 0;
  let B = (ciphertext.charCodeAt(4) | (ciphertext.charCodeAt(5) << 8) | (ciphertext.charCodeAt(6) << 16) | (ciphertext.charCodeAt(7) << 24)) >>> 0;

  for (let i = ROUNDS; i > 0; i--) {
    B = rotateRight((B - S[2 * i + 1]) >>> 0, A) ^ A;
    A = rotateRight((A - S[2 * i]) >>> 0, B) ^ B;
  }

  B = (B - S[1]) >>> 0;
  A = (A - S[0]) >>> 0;

  return [
    (A & 0xFF), ((A >>> 8) & 0xFF), ((A >>> 16) & 0xFF), ((A >>> 24) & 0xFF),
    (B & 0xFF), ((B >>> 8) & 0xFF), ((B >>> 16) & 0xFF), ((B >>> 24) & 0xFF)
  ].map(b => String.fromCharCode(b)).join('');
}
