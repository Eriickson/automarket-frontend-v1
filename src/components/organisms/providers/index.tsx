"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { ChakraProvider } from "@chakra-ui/react";

import { useStore } from "@/store/useStore.store";
import { primaryColor } from "@/themes/color";
import { mainTheme } from "@/themes/mainTheme";

import { Provider as ReduxProvider } from "react-redux";

import { CacheProvider } from "@chakra-ui/next-js";

export function Providers({ children }: { children: React.ReactNode }) {
  const { store } = useStore();

  return (
    <ReduxProvider store={store}>
      <CacheProvider>
        <ChakraProvider theme={mainTheme}>
          {children}
          <ProgressBar shallowRouting color={primaryColor[500]} height="4px" options={{ showSpinner: true }} />
        </ChakraProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
