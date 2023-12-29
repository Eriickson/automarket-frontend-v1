import React from "react";

import { Box, Divider, Stack } from "@chakra-ui/react";

import { JoinOurPlatform } from "@/app/legacy/JoinOurPlatform";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { BannerPresentation } from "./BannerPresentation";
import { ContactInformationBanner } from "./components/ContactInformationBanner";
import { GeneralInformation } from "./components/GeneralInformation";
import { GeolocationMap } from "./components/Geolocation";
import { MostRecentPublications } from "./components/MostRecentPublications";

export const AgencyDisplayView = () => {
  return (
    <Box pb="4">
      <Stack spacing="2.5">
        <BannerPresentation />
        <GeneralInformation />
        <Divider />
        <ContactInformationBanner />
        <Divider />
        <MostRecentPublications />
        <GeolocationMap />
        <ScreenAreaDelimiter maxWidth="1440">
          <JoinOurPlatform />
        </ScreenAreaDelimiter>
      </Stack>
    </Box>
  );
};
