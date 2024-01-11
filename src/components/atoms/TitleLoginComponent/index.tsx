import React, { FC } from "react";

import { Heading, Text, VStack } from "@chakra-ui/react";

import { generateNull } from "@/utils";

interface TitleLoginComponentProps {
  title: string;
  description: string;
}

export const TitleLoginComponent: FC<TitleLoginComponentProps> = ({ description, title }) => {
  return (
    <VStack spacing="1">
      <Heading as="h2" fontWeight="semibold" size={["lg", ...generateNull(5), "xl"]} textAlign="center">
        {title}
      </Heading>
      <Text fontSize={["xs", null, "md"]} lineHeight={["1.3"]} maxW={["80", null, "96"]} textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};
