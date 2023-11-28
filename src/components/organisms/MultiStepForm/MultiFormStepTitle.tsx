import React, { FC } from "react";

import { Heading, Text, VStack } from "@chakra-ui/react";

interface MultiFormStepTitleProps {
  title: string;
  description: string;
}

export const MultiFormStepTitle: FC<MultiFormStepTitleProps> = ({ description, title }) => {
  return (
    <VStack mb="8" spacing="1">
      <Heading as="h2" fontWeight="semibold" size="xl">
        {title}
      </Heading>
      <Text color="gray.600" maxW="md" textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};
