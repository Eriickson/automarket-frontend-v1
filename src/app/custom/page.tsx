"use client";
import React, { useEffect, useState } from "react";

import { decryptData, encryptData, getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";
import { getIpInfo } from "@/utils/getIpInfo";

const key = "a1!b2#c3@d4e5f6g7h8i9j0klmno_pqr";

const CustomPage = () => {
  const [deviceInformation, setDeviceInformation] = useState({});

  async function getClientInfo() {
    const deviceInfo = getDeviceInfo();
    const { ip } = await getClientIp();
    const data = await getIpInfo({ ip });

    const encryptedData = encryptData({ ip, deviceInfo }, key);
    const decryptedData = decryptData(encryptedData, key);

    console.log(encryptedData);
    console.log(decryptedData);

    setDeviceInformation({ ...data, ...deviceInfo });
  }

  useEffect(() => {
    getClientInfo();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(deviceInformation, null, 2)}</pre>
    </div>
  );
};

export default CustomPage;
