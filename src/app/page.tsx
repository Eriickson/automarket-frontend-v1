import React from "react";

import { Stack } from "@chakra-ui/react";

import { SessionWapper } from "./home/components/session-wapper";
import { AdvertisingPostersSession } from "./home/sessions/AdvertisingPosters";
import { FeaturedPublicationsSession } from "./home/sessions/featured-publications";
import { RecentPostsSession } from "./home/sessions/recent-posts";
import { JoinOurPlatform } from "./JoinOurPlatform";

const HomePage = () => {
  return (
    <Stack py="6" spacing="12">
      <SessionWapper>
        <AdvertisingPostersSession />
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
  );
};

export default HomePage;
