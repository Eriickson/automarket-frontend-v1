import React from "react";

import { Box } from "@chakra-ui/react";

import { getServerSession } from "@/utils/session/session";

import { ClientSession } from "./ClientSession";

const ProtectedPage = async () => {
  const session = await getServerSession();

  console.log(JSON.stringify(session, null, 2));

  return (
    <Box>
      ProtectedPage
      <ClientSession />
    </Box>
  );
};

export default ProtectedPage;
