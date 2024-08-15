import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/global/TopHeader";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Exclusive an ecommerce store"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center w-full">
            <TopHeader />
            <Header />
          </div>
          <main className="w-full flex flex-col items-center justify-center bg-bg">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
