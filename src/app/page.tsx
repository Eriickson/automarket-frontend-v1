import React from "react";

import { Box } from "@chakra-ui/react";

import { FeaturedPublicationsSession } from "./home/sessions/featured-publications";
import { JoinOurPlatform } from "./JoinOurPlatform";

const HomePage = () => {
  return (
    <Box>
      <FeaturedPublicationsSession />
      <JoinOurPlatform />
    </Box>
  );
};

export default HomePage;
