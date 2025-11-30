import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

import ScrollProgress from "@/app/components/layout/ScrollProgress";
import Header from "@/app/components/layout/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Requiem",
  description: "Join us -> discord.gg/rqm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-inter text-content-base-primary bg-background-base-primary`}
      >
        <ScrollProgress />
        <Header />
        <div className="flex min-h-screen justify-center mt-8">{children}</div>
      </body>
    </html>
  );
}
