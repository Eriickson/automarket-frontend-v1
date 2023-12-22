import React from "react";

import { JoinButton } from "@/components/atoms";

export const GoogleAuthButton = () => {

  async function handleClick() {
    console.log("GoogleAuthButton");
  }

  return <JoinButton joinWith="Google" onClick={handleClick} />;
};
