import React from "react";

import { Box, Stack } from "@chakra-ui/react";

import { BannerPresentation } from "./BannerPresentation";
import { ContactInformationBanner } from "./components/ContactInformationBanner";

export const AgencyDisplayView = () => {
  return (
    <Box>
      <Stack>
        <BannerPresentation />
        <ContactInformationBanner />
      </Stack>
    </Box>
  );
};
