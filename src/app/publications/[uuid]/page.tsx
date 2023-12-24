import React from "react";

import { Box, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

import { SessionWapper } from "@/app/home/components/session-wapper";

import { ContactOwnerSession } from "./sessions/ContactOwner";
import { DealerInformationSession } from "./sessions/DealerInformation";
import { GallerySliderSession } from "./sessions/GallerySlider";
import { GeneralDescriptionSession } from "./sessions/GeneralDescription";
import { IndicatorsAndStatistics } from "./sessions/IndicatorsAndStatistics";
import { ListingsSession } from "./sessions/Listings";
import { PriceAndOffers } from "./sessions/PriceAndOffers";
import { VehicleDetails } from "./sessions/VehicleDetails";

const PublicationDetails = () => {
  return (
    <Box py="8">
      <SessionWapper>
        <Box>
          <SimpleGrid columns={12} gap={6}>
            <GridItem colSpan={8}>
              <Stack spacing="4">
                <GallerySliderSession />
                <DealerInformationSession />
                <GeneralDescriptionSession />
                <ListingsSession />
              </Stack>
            </GridItem>
            <GridItem colSpan={4}>
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
