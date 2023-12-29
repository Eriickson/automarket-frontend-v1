import React from "react";

import { Image } from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

export const LogoPresentation = () => {
  return (
    <Link href="/">
      <Image alt="" src="/assets/logo.svg" w={["24", "36", "44", "52"]} />
    </Link>
  );
};
