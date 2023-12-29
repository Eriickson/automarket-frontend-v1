import { Inter } from "next/font/google";

import { Providers } from "@/components/organisms/providers";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          {/* <ScreenSize /> */}
        </Providers>
      </body>
    </html>
  );
}
