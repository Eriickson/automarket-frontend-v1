import React from "react";

import { AspectRatio, Box, Image } from "@chakra-ui/react";

export const ActiveTab = () => {
  return (
    <Box>
      <Box w="24">
        <AspectRatio ratio={4 / 3}>
          <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90499807-highres-the-bmw-xm-label-red-64beeff2ccfab.jpg?crop=0.670xw:1.00xh;0.136xw,0&resize=1200:*" />
        </AspectRatio>
      </Box>
    </Box>
  );
};
