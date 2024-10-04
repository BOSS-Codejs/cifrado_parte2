export function tigerHash(message) {
  const buffer = new TextEncoder().encode(message);
  const hash = new Uint8Array(24); // 192-bit hash size
  const prime = 0x9e3779b1; // Constante de mezcla (Golden Ratio aprox)

  for (let i = 0; i < buffer.length; i++) {
    // Mezcla adicional: Sumamos el byte actual con el hash
    hash[i % 24] ^= buffer[i];

    // Mezclamos y aplicamos la constante
    const rotated =
      ((hash[i % 24] >>> i % 8) | (hash[i % 24] << (8 - (i % 8)))) & 0xff;
    hash[i % 24] = (rotated + prime) & 0xff;
  }

  // Convertimos a cadena hexadecimal y eliminamos ceros
  return Array.from(hash)
    .slice(0, 24)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .replace(/0+$/, "");
}
