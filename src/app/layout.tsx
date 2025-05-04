import "./global.css";
import {baseUrl, createMetadata} from "@/lib/metadata";
import {RootProvider} from "fumadocs-ui/provider";
import {Inter} from "next/font/google";
import type {ReactNode} from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = createMetadata({
  title: {
    template: "%s",
    default: "Thompson Total Branding",
  },
  description: "The Next.js framework for building documentation sites",
  metadataBase: baseUrl,
});

export default function Layout({children}: {children: ReactNode}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
