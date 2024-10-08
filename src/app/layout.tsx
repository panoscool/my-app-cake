import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App Example",
  description: "Generated by create next app",
};

// Intercepting routes: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#convention

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {modal}
        {children}
        <p className="text-sm text-gray-400 text-center">This is the RootLayout</p>
      </body>
    </html>
  );
}
