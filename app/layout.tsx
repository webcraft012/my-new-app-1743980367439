import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Salon Luxe",
  description: "Salon Luxe - Your premier destination for stunning hair transformations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
