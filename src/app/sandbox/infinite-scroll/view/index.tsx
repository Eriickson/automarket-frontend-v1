import React from "react";

import { Box } from "@chakra-ui/react";

import { InfiniteScroll } from "@/components/organisms/InfiniteScroll";

export const InfinityScrollView = () => {
  return (
    <Box m="24">
      <InfiniteScroll />
    </Box>
  );
};
