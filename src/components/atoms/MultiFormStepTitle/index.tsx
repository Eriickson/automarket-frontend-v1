import React, { FC } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

interface MultiFormStepTitleProps {
  title: string;
  description: string;
}

export const MultiFormStepTitle: FC<MultiFormStepTitleProps> = ({ description, title }) => {
  return (
    <Box mb="8" textAlign="center">
      <Heading as="h2" fontWeight="semibold" size="xl">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};
