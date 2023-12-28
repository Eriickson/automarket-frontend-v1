import React from "react";

import { Box, GridItem, SimpleGrid, Stack } from "@chakra-ui/react";

import { SessionWapper } from "@/app/home/components/session-wapper";

import { PublicationDetailsView } from "./view";
import { ContactOwnerSession } from "./view/sessions/ContactOwner";
import { DealerInformationSession } from "./view/sessions/DealerInformation";
import { GallerySliderSession } from "./view/sessions/GallerySlider";
import { GeneralDescriptionSession } from "./view/sessions/GeneralDescription";
import { IndicatorsAndStatistics } from "./view/sessions/IndicatorsAndStatistics";
import { ListingsSession } from "./view/sessions/Listings";
import { OtherPublications } from "./view/sessions/OtherPublications";
import { PriceAndOffers } from "./view/sessions/PriceAndOffers";
import { SimilarPublications } from "./view/sessions/SimilarPublications";
import { VehicleDetails } from "./view/sessions/VehicleDetails";

const PublicationDetailsPage = () => {
  return (
    <PublicationDetailsView />
    // <Box py="8">
    //   <SessionWapper>
    //     <SimpleGrid columns={12} gap={6}>
    //       <GridItem colSpan={[12, null, null, 8]}>
    //         <Stack spacing="6">
    //           <GallerySliderSession />
    //           <DealerInformationSession />
    //           <GeneralDescriptionSession />
    //           <ListingsSession />
    //           <SimilarPublications />
    //           <OtherPublications />
    //         </Stack>
    //       </GridItem>
    //       <GridItem colSpan={[12, null, null, 4]}>
    //         <Stack spacing="8">
    //           <VehicleDetails />
    //           <PriceAndOffers />
    //           <ContactOwnerSession />
    //           <IndicatorsAndStatistics />
    //         </Stack>
    //       </GridItem>
    //     </SimpleGrid>
    //   </SessionWapper>
    // </Box>
  );
};

export default PublicationDetailsPage;
