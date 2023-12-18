import React from "react";

import { cookies } from "next/headers";

import { Box } from "@chakra-ui/react";

import { getCookie } from "cookies-next";

const ProtectedPage = () => {
  // TODO: create a hook and a function to get the session data
  const data = getCookie("automarket.session", { cookies });

  console.log(data);

  return <Box>ProtectedPage</Box>;
};

export default ProtectedPage;
