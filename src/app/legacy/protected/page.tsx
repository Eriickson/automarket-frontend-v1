import React from "react";

import { Box } from "@chakra-ui/react";

import { ClientSession } from "./ClientSession";

const ProtectedPage = async () => {
  return (
    <Box>
      ProtectedPage
      <ClientSession />
    </Box>
  );
};

export default ProtectedPage;
