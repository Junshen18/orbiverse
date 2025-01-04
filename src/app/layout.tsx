import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { chillax } from "@/lib/fonts";
import "./globals.css";
import AppWalletProvider from "@/components/AppWalletProvider";
import { NavigationProvider } from "@/context/NavigationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrbiVerse",
  description: "Your Life, Your Orbs, Your Universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chillax.variable} font-chillax bg-background antialiased text-white`}
      >
        <AppWalletProvider>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </AppWalletProvider>
      </body>
    </html>
  );
}
