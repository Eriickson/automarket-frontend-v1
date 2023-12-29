"use client";

import React from "react";

import { Button } from "@chakra-ui/react";

import { useSession } from "@/hooks";

export const ClientSession = () => {
  const { session, signout } = useSession();

  async function handleSignout() {
    await signout();
    window.location.href = "/";
  }

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Button onClick={handleSignout}>Sign Out</Button>
    </div>
  );
};
