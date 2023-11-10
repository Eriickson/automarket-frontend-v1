"use client";

import { mainTheme } from "@/themes/mainTheme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={mainTheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
