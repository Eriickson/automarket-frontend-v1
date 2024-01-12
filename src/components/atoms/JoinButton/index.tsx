import React, { FC } from "react";

import { HStack, Image, Text } from "@chakra-ui/react";

import { Button } from "@/components/atoms";
import { generateNull } from "@/utils";

type JoinWith = "Google" | "Facebook";

interface JoinButtonProps {
  joinWith: JoinWith;
  onClick(): void;
}

export const JoinButton: FC<JoinButtonProps> = ({ joinWith, onClick }) => {
  return (
    <Button py="5" onClick={onClick}>
      <HStack>
        <Image alt="" src={`/assets/login-icons/${joinWith.toLowerCase()}.png`} w={["5", ...generateNull(5), "6"]} />
        <Text fontSize="sm">Continua con {joinWith}</Text>
      </HStack>
    </Button>
  );
};
