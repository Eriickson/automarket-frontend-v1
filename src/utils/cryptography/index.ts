import crypto from "crypto";

const algorithm = "aes-256-ctr";
const ivLength = 16;

export function encryptData<T = unknown>(data: T, key: string) {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(JSON.stringify(data));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const encryptedData = iv.toString("hex") + ":" + encrypted.toString("hex");

  return encryptedData;
}

export function decryptData<T = unknown>(encryptedData: string, key: string): T {
  const textParts = encryptedData.split(":");

  const iv = Buffer.from(textParts.shift() || "", "hex");

  const encryptedText = Buffer.from(textParts.join(":"), "hex");

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return JSON.parse(decrypted.toString());
}
