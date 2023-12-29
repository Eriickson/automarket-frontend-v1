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
    <Button onClick={onClick}>
      <HStack>
        <Image alt="" src={`/assets/login-icons/${joinWith.toLowerCase()}.png`} w={["5", null, null, null, "6"]} />
        <Text fontSize="sm">Continua con {joinWith}</Text>
      </HStack>
    </Button>
  );
};
