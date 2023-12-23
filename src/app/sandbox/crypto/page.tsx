"use client";
import React, { useCallback, useEffect } from "react";

import { Box } from "@chakra-ui/react";

import cryptoJs from "crypto-js";

const CryptoPage = () => {
  const encryptData = (data: any, publicKey: string) => {
    const key = cryptoJs.enc.Utf8.parse(publicKey);
    const iv = cryptoJs.lib.WordArray.random(16);
    const encrypted = cryptoJs.AES.encrypt(JSON.stringify(data), key, { iv: iv });

    return {
      iv: iv.toString(cryptoJs.enc.Hex),
      encryptedData: encrypted.toString(),
    };
  };

  const testinCriptoJs = useCallback(async () => {
    const data = { name: "John", lastname: "Doe", email: "john@doe.com" };

    const encryptedData = encryptData(data, "1234567890123456");

    console.log("data", data);
    console.log("encryptedData", encryptedData);
  }, []);

  useEffect(() => {
    testinCriptoJs();
  }, [testinCriptoJs]);

  return <Box>CryptoPage</Box>;
};

export default CryptoPage;
