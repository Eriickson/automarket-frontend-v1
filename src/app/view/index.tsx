import React from "react";

import { Stack } from "@chakra-ui/react";

import { AdvertisingPostersSession } from "./components/AdvertisingPostersSession";
import { SearchSession } from "./components/SearchSession";

export const HomeView = () => {
  return (
    <Stack my="2">
      <SearchSession />
      <AdvertisingPostersSession />
    </Stack>
  );
};
