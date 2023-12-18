import CryptoJS from "crypto-js";

type EncryptDataArgs = {
  payload: Record<string, unknown>;
  secretPass: string;
};

type DecryptDataArgs = {
  encryptedData: string;
  secretPass: string;
};

export async function encryptData({ payload, secretPass }: EncryptDataArgs) {
  const data = CryptoJS.AES.encrypt(JSON.stringify(payload), secretPass).toString();

  return data;
}

export async function decryptData({ encryptedData, secretPass }: DecryptDataArgs): Promise<Record<string, unknown>> {
  const data = CryptoJS.AES.decrypt(encryptedData, secretPass).toString(CryptoJS.enc.Utf8);

  console.log(data);

  return JSON.parse(data);
}
