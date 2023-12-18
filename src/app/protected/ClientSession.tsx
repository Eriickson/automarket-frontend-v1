"use client";

import React from "react";

import { useSession } from "@/hooks";

export const ClientSession = () => {
  const { session } = useSession();

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
