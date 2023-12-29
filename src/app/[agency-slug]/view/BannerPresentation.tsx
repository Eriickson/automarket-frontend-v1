import React from "react";

import { HStack, Image as ChakraImage, Text } from "@chakra-ui/react";
import { AspectRatio, Box } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
export const BannerPresentation = () => {
  return (
    <ScreenAreaDelimiter withoutPadding maxWidth="1440">
      <Box pb="14" pos="relative">
        <AspectRatio ratio={[16 / 9, null, null, 2.68 / 1]}>
          <ChakraImage
            alt=""
            src="https://grupoambar.com.do/wp-content/themes/yootheme/cache/04-nissan-edi-5987f0a8.jpeg"
          />
        </AspectRatio>
        <Box bottom="0" left="2" pos="absolute">
          <HStack alignItems="flex-end">
            <AspectRatio
              border="4px"
              borderColor="secondary.500"
              h={["32", null, null, null, "36"]}
              overflow="hidden"
              ratio={1 / 1}
              rounded="md"
              w={["32", null, null, null, "36"]}
            >
              <ChakraImage
                alt=""
                src="https://media.licdn.com/dms/image/C4D0BAQGIzktkO3G0Og/company-logo_200_200/0/1643324294424/santo_domingo_motors_logo?e=2147483647&v=beta&t=aUVWVMDdQ74si5z-grf8ijzIMY7d4ZtQM_3vtDCJIwQ"
              />
            </AspectRatio>
            <Box mb="2.5">
              <Text fontWeight="semibold" lineHeight="1">
                Santo Domingo Motors
              </Text>
              <Text color="gray.500" fontSize="sm">
                Los mejores autos al mejor precio.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ScreenAreaDelimiter>
  );
};
