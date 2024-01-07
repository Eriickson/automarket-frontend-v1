import React from "react";

import { Stack } from "@chakra-ui/react";

import { ScreenAreaDelimiter } from "@/components/atoms/ScreenAreaDelimiter";
import { InformationSign } from "@/components/organisms/InformationSign";

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
        <InformationSign
          description="Únete a nuestra plataforma y empieza a disfrutar de todos los beneficios que tenemos para ti."
          title="Ven y forma parte de nuetra plataforma"
        />
      </ScreenAreaDelimiter>
    </Stack>
  );
};
