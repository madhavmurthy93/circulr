import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
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
        <header className="border-b px-8 py-5">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/">
              <span className="text-2xl font-bold">Circulr</span>
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/account">
                    <span className="text-3xl">
                      <HiOutlineUserCircle />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1 px-8 py-12 grid">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
