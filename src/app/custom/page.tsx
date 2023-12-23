"use client";
import React, { useEffect, useState } from "react";

import { getClientIp } from "@/utils";
import { getDeviceInfo } from "@/utils/getClientDeviceInformation";
import { getIpInfo } from "@/utils/getIpInfo";

const CustomPage = () => {
  const [deviceInformation, setDeviceInformation] = useState({});

  async function getClientInfo() {
    const deviceInfo = getDeviceInfo();
    const { ip } = await getClientIp();
    const data = await getIpInfo({ ip });

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
