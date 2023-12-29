import React from "react";

import Link from "next/link";

import { Image } from "@chakra-ui/react";


export const LogoPresentation = () => {
  return (
    <Link href="/">
      <Image alt="" src="/assets/logo.svg" w={["24", "36", "44", "52"]} />
    </Link>
  );
};
