import React from "react";

import { Stack } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";

import { JoinOurPlatform } from "../legacy/JoinOurPlatform";
import { AdvertisingPostersSession } from "./components/AdvertisingPostersSession";
import { FeaturedPublicationsSession } from "./components/featured-publications";
import { RecentPostsSession } from "./components/recent-posts";
import { SearchSession } from "./components/SearchSession";

export const HomeView = () => {
  return (
    <Stack my="2">
      <SearchSession />
      <AdvertisingPostersSession />
      <FeaturedPublicationsSession />
      <RecentPostsSession />
      <ScreenAreaDelimiter>
        <JoinOurPlatform />
      </ScreenAreaDelimiter>
    </Stack>
  );
};
