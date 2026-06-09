import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "SpoilMe — Get gifted by your fans. You keep 100%.",
  description:
    "The gifting platform for creators. Wishlists, cash gifts, instant payouts. Zero commission. Total privacy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable} h-full antialiased`}>
        <body className="min-h-full bg-black text-white">{children}</body>
      </html>
    </ClerkProvider>
  );
}
