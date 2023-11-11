"use client";
import { useEffect } from "react";

import { useDisclosure } from "@chakra-ui/react";

import { Inter } from "next/font/google";

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
        <Providers>{disclosureRender.isOpen ? children : null}</Providers>
      </body>
    </html>
  );
}
