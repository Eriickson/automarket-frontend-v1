import React from "react";

import { Box, GridItem, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { SessionWapper } from "@/app/home/components/session-wapper";

import { DealerInformationSession } from "./sessions/DealerInformation";
import { GallerySliderSession } from "./sessions/GallerySlider";
import { GeneralDescriptionSession } from "./sessions/GeneralDescription";
import { ListingsSession } from "./sessions/Listings";
import { OtherPublications } from "./sessions/OtherPublications";
import { SimilarPublications } from "./sessions/SimilarPublications";
import { VehicleDetails } from "./sessions/VehicleDetails";

export const PublicationDetailsView = () => {
  return (
    <Box py="2">
      <SessionWapper>
        <SimpleGrid columns={12} gap={[2, null, null, 6]}>
          <GridItem colSpan={[12, null, null, 8]}>
            <Stack spacing="2">
              <DealerInformationSession />
              <GallerySliderSession />
              <VehicleDetails />
              <GeneralDescriptionSession />
              {/* <ListingsSession /> */}
              <SimilarPublications />
              <OtherPublications />
            </Stack>
          </GridItem>
        </SimpleGrid>
      </SessionWapper>
    </Box>
  );
};
