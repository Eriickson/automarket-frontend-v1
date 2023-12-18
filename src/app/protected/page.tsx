// "use client";
import React from "react";

import { Box } from "@chakra-ui/react";

import { getServerSession } from "@/utils/session/session";

import { useSession } from "@/hooks";

const ProtectedPage = async () => {
  // const data = getCookie("automarket.session", { cookies });
  // const { session } = useSession();
  const session = await getServerSession();

  console.log("session", session);

  // if (!session) return "Loading...";

  return <Box>ProtectedPage</Box>;
};

export default ProtectedPage;
