import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/header/Header";
import Main from "./_components/Main";
import ReduxProvider from "./_components/ReduxProvider";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ReduxProvider>
          <Header />
          <Main>{children}</Main>
        </ReduxProvider>
      </body>
    </html>
  );
}
