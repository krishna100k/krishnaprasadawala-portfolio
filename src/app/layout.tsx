import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Taskbar from "@/components/Taskbar";
import ReduxProvider from "./ReduxProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Krishnaprasad Awala",
  description: "Windows 11 themed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider >
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased bg-[url("/background-2.jpg")] bg-fill bg-center lg:bg-cover lg:bg-top bg-no-repeat`}
      >
        {children}
        <Taskbar />
      </body>
      </ReduxProvider>
    </html>
  );
}
