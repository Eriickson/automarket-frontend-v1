// import CryptoJS from "crypto-js";

type EncryptDataArgs = {
  payload: Record<string, unknown>;
  secretPass: string;
};

type DecryptDataArgs = {
  encryptedData: string;
  secretPass: string;
};

export async function encryptData({ payload }: EncryptDataArgs) {
  // const data = CryptoJS.AES.encrypt(JSON.stringify(payload), secretPass).toString();
  const data = JSON.stringify(payload || {});

  return data;
}

export async function decryptData({ encryptedData }: DecryptDataArgs): Promise<Record<string, unknown>> {
  // const data = CryptoJS.AES.decrypt(encryptedData, secretPass).toString(CryptoJS.enc.Utf8);

  const data = encryptedData;

  return JSON.parse(data);
}
