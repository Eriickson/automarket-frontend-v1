import React, { FC } from "react";

import { Heading, Image, Text, VStack } from "@chakra-ui/react";

interface MultiFormStepTitleProps {
  title: string;
  description: string;
}

export const MultiFormStepTitle: FC<MultiFormStepTitleProps> = ({ description, title }) => {
  return (
    <VStack spacing="1">
      <Image
        alt=""
        src="https://img.freepik.com/vector-gratis/ilustracion-concepto-formularios_114360-4957.jpg?w=2000&t=st=1701706077~exp=1701706677~hmac=84471adbcea2abd546137840d4336f3140c17b237625f5c6902511b1a3ba190a"
        userSelect="none"
        w="2xs"
      />
      <Heading as="h2" fontWeight="semibold" size="xl">
        {title}
      </Heading>
      <Text color="gray.600" maxW="md" textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};
