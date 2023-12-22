import React, { FC } from "react";

import { HStack, Image, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";

type JoinWith = "Google" | "Facebook";

interface JoinButtonProps {
  joinWith: JoinWith;
  onClick(): void;
}

export const JoinButton: FC<JoinButtonProps> = ({ joinWith, onClick }) => {
  return (
    <Button flex="1" py="6" rounded="sm" shadow="sm" variant="outline" onClick={onClick}>
      <HStack>
        <Image alt="" src={`/assets/login-icons/${joinWith.toLowerCase()}.png`} w="6" />
        <Text>{joinWith}</Text>
      </HStack>
    </Button>
  );
};
