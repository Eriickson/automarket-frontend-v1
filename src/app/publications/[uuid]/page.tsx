import React from "react";

import { Box, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

import { SessionWapper } from "@/app/home/components/session-wapper";

import { ContactOwnerSession } from "./sessions/ContactOwner";
import { DealerInformationSession } from "./sessions/DealerInformation";
import { GallerySliderSession } from "./sessions/GallerySlider";
import { GeneralDescriptionSession } from "./sessions/GeneralDescription";
import { IndicatorsAndStatistics } from "./sessions/IndicatorsAndStatistics";
import { ListingsSession } from "./sessions/Listings";
import { OtherPublications } from "./sessions/OtherPublications";
import { PriceAndOffers } from "./sessions/PriceAndOffers";
import { SimilarPublications } from "./sessions/SimilarPublications";
import { VehicleDetails } from "./sessions/VehicleDetails";

const PublicationDetails = () => {
  return (
    <Box py="8">
      <SessionWapper>
        <Box>
          <SimpleGrid columns={12} gap={6}>
            <GridItem colSpan={[12, null, null, 8]}>
              <Stack spacing="6">
                <GallerySliderSession />
                <DealerInformationSession />
                <GeneralDescriptionSession />
                <ListingsSession />
                <SimilarPublications />
                <OtherPublications />
              </Stack>
            </GridItem>
            <GridItem colSpan={[12, null, null, 4]}>
              <Stack spacing="8">
                <VehicleDetails />
                <PriceAndOffers />
                <ContactOwnerSession />
                <IndicatorsAndStatistics />
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </SessionWapper>
    </Box>
  );
};

export default PublicationDetails;
