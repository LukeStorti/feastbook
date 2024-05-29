import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import QueryProvider from "@/providers/QueryProvider";

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeastBook",
  description: "Finding new recipes has never been easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
