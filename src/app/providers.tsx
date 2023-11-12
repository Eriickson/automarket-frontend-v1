"use client";
import { Provider as ReduxProvider } from "react-redux";
import { mainTheme } from "@/themes/mainTheme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <CacheProvider>
        <ChakraProvider theme={mainTheme}>{children}</ChakraProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
