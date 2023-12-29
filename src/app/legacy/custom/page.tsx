"use client";
import React, { useEffect } from "react";

import { decryptData, encryptData, getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";

const key = "a1!b2#c3@d4e5f6g7h8i9j0klmno_pqr";

const CustomPage = () => {
  async function getClientInfo() {
    const deviceInfo = getDeviceInfo();
    const { clientIp } = await getClientIp();

    const encryptedData = encryptData({ clientIp, deviceInfo }, key);
    const decryptedData = decryptData(encryptedData, key);

    console.log(encryptedData);
    console.log(decryptedData);
  }

  useEffect(() => {
    getClientInfo();
  }, []);

  return <div>c</div>;
};

export default CustomPage;
