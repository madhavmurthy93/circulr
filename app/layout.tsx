import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import ReduxProvider from "@/contexts/ReduxProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Circulr",
    default: "Circulr",
  },
  description:
    "Circulr is a marketplace to lend to and borrow from your community at no cost things that you may need once in a while but not often enough you need to buy that thing for yourself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <ReduxProvider>
          <Header />
          <Main>{children}</Main>
        </ReduxProvider>
      </body>
    </html>
  );
}
