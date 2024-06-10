import type { Metadata } from "next";

import "@/app/globals.css";
import { fonts } from "@/src/lib/chakra/fonts";
import { ChakraProvider } from "@/src/lib/chakra/ChakraProvider";
import { ReactQueryProvider } from "@/src/lib/react-query/ReactQueryProvider";

export const metadata: Metadata = {
  title: "AI Travel Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.lato.variable}>
      <body>
        <ReactQueryProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
