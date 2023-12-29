import React from "react";

import { Box } from "@chakra-ui/react";

const BreakpointsPage = () => {
  return (
    <Box m="24">
      <Box
        backgroundColor={[
          "purple.500", // base
          "red.500", // 4xs
          "orange.500", // 3xs
          "blue.500", // 2xs
          "green.500", // xs
          "yellow.500", // sm
          "pink.500", // md
          "purple.500", // lg
          "orange.500", // xl
          "gray.500", // 2xl
          "cyan.500", // 3xl
          "teal.500", // 4xl
          "blue.500", // 5xl
          "red.500", // 6xl
        ]}
        h="32"
        w="32"
      ></Box>
    </Box>
  );
};

export default BreakpointsPage;
