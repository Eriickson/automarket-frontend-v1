import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import { SessionWapper } from "./home/components/session-wapper";
import { AdvertisingPostersSession } from "./home/sessions/AdvertisingPosters";
import { FeaturedPublicationsSession } from "./home/sessions/featured-publications";
import { RecentPostsSession } from "./home/sessions/recent-posts";
import { SearchSession } from "./home/sessions/search";
import { JoinOurPlatform } from "./JoinOurPlatform";
import EcommerceLayout from "./legal/layout";

const HomePage = () => {
  return (
    <EcommerceLayout>
      <Stack py="4" spacing={["4"]}>
        {/* <SessionWapper>
          <AdvertisingPostersSession />
        </SessionWapper> */}
        {/* <Box bgColor="gray.100" p="4">
          <SessionWapper>
            <Box mb="2">
              <Text fontSize="2xl" fontWeight="semibold">
                Bienvenido Automarket
              </Text>
            </Box>
            <SearchSession />
          </SessionWapper>
        </Box>
        <SessionWapper>
          <FeaturedPublicationsSession />
        </SessionWapper> */}
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
