import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import { SessionWapper } from "./legacy/home/components/session-wapper";
import { AdvertisingPostersSession } from "./legacy/home/sessions/AdvertisingPosters";
import { FeaturedPublicationsSession } from "./legacy/home/sessions/featured-publications";
import { RecentPostsSession } from "./legacy/home/sessions/recent-posts";
import { SearchSession } from "./legacy/home/sessions/search";
import { JoinOurPlatform } from "./legacy/JoinOurPlatform";
import EcommerceLayout from "./legacy/legal/layout";

const HomePage = () => {
  return (
    <EcommerceLayout>
      <Stack py="2" spacing={["4"]}>
        <SessionWapper>
          <AdvertisingPostersSession />
        </SessionWapper>
        <SessionWapper>
          <Box mb="2">
            <Text fontSize={["lg", null, null, "2xl"]} fontWeight="semibold">
              Bienvenido Automarket
            </Text>
          </Box>
          <SearchSession />
        </SessionWapper>
        <SessionWapper>
          <FeaturedPublicationsSession />
        </SessionWapper>
        <SessionWapper>
          <RecentPostsSession />
        </SessionWapper>
        <SessionWapper>
          <JoinOurPlatform />
        </SessionWapper>
      </Stack>
    </EcommerceLayout>
  );
};

export default HomePage;
