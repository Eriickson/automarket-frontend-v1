import React, { FC } from "react";

import { Box, HStack, Text } from "@chakra-ui/react";

interface ItemInfoProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export const ItemInfo: FC<ItemInfoProps> = ({ icon, label, value }) => {
  return (
    <HStack>
      <Box w="20">
        <Text as="span" color="gray.600" fontSize="sm">
          {label}:
        </Text>
      </Box>
      <HStack spacing="1">
        <Box mb="0.5" userSelect="none">
          {icon}
        </Box>
        <Text as="span" fontWeight="medium">
          {value}
        </Text>
      </HStack>
    </HStack>
  );
};
