import React, { FC } from "react";

import { Text } from "@chakra-ui/react";

interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <Text fontSize="sm" lineHeight="1.3">
      {children}
    </Text>
  );
};
