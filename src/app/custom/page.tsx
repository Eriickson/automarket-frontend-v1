"use client";
import React, { useEffect, useState } from "react";

import { getDeviceInfo } from "@/utils/getClientDeviceInformation";

const CustomPage = () => {
  const [deviceInformation, setDeviceInformation] = useState({});

  async function getClientInfo() {
    const data = getDeviceInfo();

    setDeviceInformation(data);
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
