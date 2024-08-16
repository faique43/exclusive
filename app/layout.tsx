import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/global/TopHeader";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
