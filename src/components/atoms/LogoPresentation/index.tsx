import React from "react";

import { Image, Link } from "@chakra-ui/react";

export const LogoPresentation = () => {
  return (
    <Link href="/">
      <Image alt="" src="/assets/logo.svg" w={["36", null, null, "52"]} />
    </Link>
  );
};
