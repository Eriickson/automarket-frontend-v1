import React from "react";

import { Box, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

import { GallerySliderSession } from "@/app/legacy/publications/[uuid]/view/sessions/GallerySlider";
import { SimilarPublications } from "@/app/legacy/publications/[uuid]/view/sessions/SimilarPublications";
import { VehicleDetails } from "@/app/legacy/publications/[uuid]/view/sessions/VehicleDetails";
import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

export const PublicationsDisplayView = () => {
  return (
    <Box my="4" px={[null, null, null, null, "4"]}>
      <ScreenAreaDelimiter maxWidth="1440">
        <SimpleGrid columns={12} gap="4">
          <GridItem colSpan={[12, null, null, null, 7, 8]}>
            <Stack spacing={["4", null, null, "6"]}>
              <GallerySliderSession />
              <SimilarPublications />
            </Stack>
          </GridItem>
          <GridItem colSpan={[12, null, null, null, 5, 4]}>
            <VehicleDetails />
          </GridItem>
        </SimpleGrid>
      </ScreenAreaDelimiter>
    </Box>
  );
};
