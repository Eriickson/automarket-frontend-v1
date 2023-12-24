import React, { FC } from "react";

import { Box, HStack, Text } from "@chakra-ui/react";

import { Zap } from "react-feather";

interface VehicleDetailItemProps {
  label: string;
  value: string;
}

export const VehicleDetailItem: FC<VehicleDetailItemProps> = ({ label, value }) => {
  return (
    <HStack>
      <Box>
        <Zap size="1.25rem" strokeWidth="2.5" />
      </Box>
      <Text color="gray.500" fontWeight="semibold">
        {label}
      </Text>
      <Box borderTop="4px" borderTopColor="gray.300" borderTopStyle="dotted" flex="1" h="0" mt="1" />
      <Text fontWeight="semibold">{value}</Text>
    </HStack>
  );
};
