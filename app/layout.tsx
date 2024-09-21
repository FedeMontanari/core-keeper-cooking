import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
// import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { PHProvider } from "./providers";

export const metadata: Metadata = {
  title: "Core Keeper Cooking",
  description: "Made with <3 by Yaki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PHProvider>
        <body className="w-screen h-screen overflow-x-hidden font-pixel">
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            {children}
            {/* <Analytics /> */}
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
