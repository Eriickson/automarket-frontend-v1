import React from "react";

import { Box, HStack, Image, Text } from "@chakra-ui/react";

export const DealerInformationSession = () => {
  return (
    <HStack>
      <Image
        alt="Erickson Auto Import"
        h="10"
        rounded="md"
        src="https://img.freepik.com/free-vector/gradient-car-wash-logo-design_23-2149925885.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1700784000&semt=ais"
        w="10"
      />
      <Box>
        <Text fontSize={["sm", null, null, "md"]} fontWeight="semibold" lineHeight="1.2">
          Erickson Auto Import
        </Text>
        <Text
          color="gray.500"
          fontSize={["xs", null, null, "sm"]}
          maxW="72"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          Los mejores vehículos a los mejores precios
        </Text>
      </Box>
    </HStack>
  );
};
