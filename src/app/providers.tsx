"use client";
import { ChakraProvider } from "@chakra-ui/react";

import { useStore } from "@/store/useStore.store";
import { mainTheme } from "@/themes/mainTheme";

import { Provider as ReduxProvider } from "react-redux";

import { CacheProvider } from "@chakra-ui/next-js";

export function Providers({ children }: { children: React.ReactNode }) {
  const { store } = useStore();

  return (
    <ReduxProvider store={store}>
      <CacheProvider>
        <ChakraProvider theme={mainTheme}>{children}</ChakraProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
