import React, { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

interface LabelValueFieldProps {
  label: string;
  value: string;
}

export const LabelValueField: FC<LabelValueFieldProps> = ({ label, value }) => {
  return (
    <Box>
      <Text fontSize="sm" mb="0.5">
        {label}
      </Text>
      <Text fontWeight="medium">{value}</Text>
    </Box>
  );
};
