"use client";
import { useEffect, useState } from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

import { ChakraProvider } from "@chakra-ui/react";

import { ScreenSize } from "@/components/atoms";
import { useStore } from "@/store/useStore.store";
import { primaryColor } from "@/themes/color";
import { mainTheme } from "@/themes/mainTheme";

import { Provider as ReduxProvider } from "react-redux";

import { CacheProvider } from "@chakra-ui/next-js";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isRendered, setIsRendered] = useState(false);

  const { store } = useStore();

  useEffect(() => {
    setTimeout(() => {
      setIsRendered(true);
    }, 75);
  }, []);

  return (
    <ReduxProvider store={store}>
      <CacheProvider>
        <ChakraProvider theme={mainTheme}>
          {isRendered ? children : null}
          <ProgressBar shallowRouting color={primaryColor[500]} height="4px" options={{ showSpinner: true }} />
          {/* <ScreenSize /> */}
        </ChakraProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}
