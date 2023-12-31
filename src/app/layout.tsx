"use client";
import { useEffect } from "react";

import { Inter } from "next/font/google";

import { useDisclosure } from "@chakra-ui/react";

import { ScreenSize } from "@/components/atoms";

import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const disclosureRender = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      disclosureRender.onOpen();
    }, 0);
  }, [disclosureRender]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {disclosureRender.isOpen ? children : null}
          {/* <ScreenSize /> */}
        </Providers>
      </body>
    </html>
  );
}
