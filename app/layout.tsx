import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import ReduxProvider from "@/contexts/ReduxProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              className:
                "text-gray-700 bg-white text-sm md:text-base p-4 shadow-md rounded-md max-w-md",
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
