import React from "react";

import { Stack } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { PublicationList } from "./components/PublicationList";
import { Title } from "./components/Title";

export const PublicationsSavedView = () => {
  return (
    <Stack py="2" spacing={4}>
      <ScreenAreaDelimiter maxWidth="1440">
        <Title />
        <PublicationList />
      </ScreenAreaDelimiter>
    </Stack>
  );
};
